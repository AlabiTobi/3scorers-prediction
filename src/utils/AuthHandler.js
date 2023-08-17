import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Validation } from "../utils/validation";
import { useDispatch } from "react-redux";
import { setDetails } from "../redux/slices/loggedInSlice";

const AuthHandler = ({ apiUrl, path, inputs, setInputs, setLoading, setFormErrors, setDisabledButton, formType, successful }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearInputFields = () => {
    const emptyInputs = Object.fromEntries(
      Object.keys(inputs).map((key) => [key, ""])
    );
    setInputs(emptyInputs);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const errors = Validation(inputs, formType);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
    } else {
      setFormErrors(errors);
    }
    try {
      setDisabledButton(true);
      const { data } = await axios.post(
        apiUrl,
        {...inputs},
        { headers: { "Content-Type": "application/json" } }
      );
      formType === "login" && dispatch(setDetails(data))
      toast.success(successful);
      clearInputFields();
      navigate(path);
    } catch (error) {
      setDisabledButton(false);
      console.log(error);
      console.log(error.response.data.data);
      toast.error(error.response.data.data);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAuth,
  };
};

export default AuthHandler;
