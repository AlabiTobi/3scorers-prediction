import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminRoles, setAllRoles, setUserRoles } from '../redux/slices/fetchedRolesSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useGetUsers = (setLoading) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state?.loggedIn);
  const fetchedRoles = useSelector(state => state?.fetchedRoles);
  const token = state?.message?.accessToken;
  const getUsersUrl = process.env.REACT_APP_GET_USERS_API_URL;

  useEffect(() => {
    let isMounted = true;
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          getUsersUrl, 
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (isMounted) {
          const reversedData = data?.data?.reverse();
          const adminRoles = reversedData?.filter(user => user?.role === 'admin');
          const userRoles = reversedData?.filter(user => user?.role === 'user');
          dispatch(setAllRoles(reversedData));
          dispatch(setAdminRoles(adminRoles));
          dispatch(setUserRoles(userRoles));
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          toast.error('Session expired, please Login again');
          navigate('/login');
        } else {toast.error(error.response.data.data)}
      } finally {
        setLoading(false);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
    };
  }, [getUsersUrl, token, dispatch, navigate, setLoading]);

  return { fetchedRoles, navigate };
};

export default useGetUsers;
