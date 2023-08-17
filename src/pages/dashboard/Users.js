import { useState } from "react";
import Lists from "../dashComponents/Lists";
import SearchNamesUser from "../dashComponents/SearchNamesUser";
import { MainView } from "../dashComponents/dashStyled";
import { LoadingWrapper, ManinViewContainer } from "../dashComponents/secondDashStyled";
import ReactLoading from "react-loading";
import useGetUsers from "../../hooks/useGetUsers";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [searchTermUser, setSearchTermUser] = useState("");
  const [searchResultsUser, setSearchResultsUser] = useState([]);

  const { fetchedRoles } = useGetUsers(setLoading);

  return (
      <MainView>
        <ManinViewContainer>
        {loading ? 
          <LoadingWrapper >
            <ReactLoading type="spin" color="#008F8F" height={100} width={50}/>
          </LoadingWrapper> : 
          <>
            <SearchNamesUser roleNameUser="User results" 
            searchTermUser={searchTermUser} searchResultsUser={searchResultsUser}
            setSearchTermUser={setSearchTermUser} setSearchResultsUser={setSearchResultsUser}
            fetchedRolesUser={fetchedRoles?.userRoles} roleUser="User"/>
            {searchTermUser === "" &&
            <Lists fetchedRoles={fetchedRoles} width="100%" 
            roleName="User's Name" btnBg="#51FFFF" btnColor="#000" />}
          </>}
        </ManinViewContainer>
      </MainView>
  )
};

export default Users;