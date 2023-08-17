import { useState } from "react";
import Lists from "../dashComponents/Lists";
import SearchNames from "../dashComponents/SearchNames";
import { MainView } from "../dashComponents/dashStyled";
import { LoadingWrapper, ManinViewContainer } from "../dashComponents/secondDashStyled";
import useGetUsers from "../../hooks/useGetUsers";
import ReactLoading from "react-loading";

const Admins = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { fetchedRoles } = useGetUsers(setLoading);
  
  return (
      <MainView>
        <ManinViewContainer>
        {loading ? 
          <LoadingWrapper >
            <ReactLoading type="spin" color="#008F8F" height={100} width={50}/>
           </LoadingWrapper> : 
          <>
            <SearchNames roleName="Admin results" 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            searchResults={searchResults} setSearchResults={setSearchResults}
            fetchedRoles={fetchedRoles?.adminRoles}role="Admin"/>
            {searchTerm === "" && 
            <Lists fetchedRoles={fetchedRoles} width="100%" btnBg="#51FFFF" 
            btnColor="#000" roleName="Admin's Name"/>}
          </>}
        </ManinViewContainer>
      </MainView>
  )
};

export default Admins;