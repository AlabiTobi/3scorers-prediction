import { NormalFont, SubHeader } from "../../GlobalStyles";
import ViewButtonComponent from "../../components/ViewButtonComponent";
import { dynamicLocation } from "../../utils/helpers";
import { ListsContainer } from "./dashStyled";
import { EachList, ListWrapper, SECTION, SubHeaderWrapper } from "./secondDashStyled";
import { useLocation } from "react-router-dom";

const Lists = ({roleName}) => {
    const location = useLocation();

    return (
        <SECTION>
        {dynamicLocation(location, "/overview") && (
        <SubHeaderWrapper>
            <SubHeader color="#1F1F1F">List of Users</SubHeader>
        </SubHeaderWrapper>)
        }   
        <ListsContainer>
            <ListWrapper>
                {roleName && <SubHeader style={{padding: "1rem 0rem"}} color="#1F1F1F">{roleName}</SubHeader>}
                <EachList>
                    <img src="" alt="" />
                    <NormalFont></NormalFont>
                    <ViewButtonComponent />
                </EachList>
            </ListWrapper>
        </ListsContainer>
        </SECTION>
    )
};

export default Lists;