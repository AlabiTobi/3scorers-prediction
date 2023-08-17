import { useState } from "react";
import Lists from "../dashComponents/Lists";
import Metrics from "../dashComponents/Metrics";
import { ListsContainer, MainView } from "../dashComponents/dashStyled";
import { LoadingWrapper, ManinViewContainer } from "../dashComponents/secondDashStyled";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import useGetUsers from "../../hooks/useGetUsers";

const Overview = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { fetchedRoles } = useGetUsers(setLoading);
  const totalAdmins = fetchedRoles?.adminRoles?.length;
  const totalUsers = fetchedRoles?.userRoles?.length;
  
  return (
      <MainView>
        <ManinViewContainer>
          {loading ? 
            <LoadingWrapper >
              <ReactLoading type="spin" color="#008F8F" height={100} width={50}/>
            </LoadingWrapper> : 
            <>
              <Metrics totalAdmins={totalAdmins} totalUsers={totalUsers}/>
              <ListsContainer>
                <Lists showMore={()=>navigate("/users")} fetchedRoles={fetchedRoles} listOf="Users"/>
                <Lists showMore={()=>navigate("/admins")} fetchedRoles={fetchedRoles} listOf="Admins"/> 
              </ListsContainer>
            </>}
        </ManinViewContainer>
      </MainView>
  )
};

export default Overview;