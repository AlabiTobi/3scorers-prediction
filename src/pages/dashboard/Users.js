import Lists from "../dashComponents/Lists";
import SearchNames from "../dashComponents/SearchNames";
import { MainView } from "../dashComponents/dashStyled";
import { ManinViewContainer } from "../dashComponents/secondDashStyled";

const Users = () => {
  return (
    <MainView>
      <ManinViewContainer>
        <SearchNames role="User"/>
        <Lists width="100%" btnBg="#51FFFF" btnColor="#000" roleName="User's Name"/>
      </ManinViewContainer>
    </MainView>
  )
};

export default Users;