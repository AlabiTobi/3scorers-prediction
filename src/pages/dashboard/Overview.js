import Lists from "../dashComponents/Lists";
import Metrics from "../dashComponents/Metrics";
import { ListsContainer, MainView } from "../dashComponents/dashStyled";
import { ManinViewContainer } from "../dashComponents/secondDashStyled";

const Overview = () => {
  return (
    <MainView>
      <ManinViewContainer>
        <Metrics />
        <ListsContainer>
          <Lists listOf="Users"/>
          <Lists listOf="Admins"/>
        </ListsContainer>
      </ManinViewContainer>
    </MainView>
  )
};

export default Overview;