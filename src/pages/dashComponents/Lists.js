import { NormalFont, SubHeader } from "../../GlobalStyles";
import ViewButtonComponent from "../../components/ViewButtonComponent";
import { dynamicLocation } from "../../utils/helpers";
import { ListsContainer } from "./dashStyled";
import { EachList, ListWrapper, SECTION, SubHeaderWrapper } from "./secondDashStyled";
import { useLocation } from "react-router-dom";
import logo from "../../assets/3scorerslogo.png"

const Lists = ({width, name = "Name", userImg = logo, roleName, listOf, btnBg = "#FFF" , btnColor = "#008F8F"}) => {
    const location = useLocation();

    return (
        <SECTION width={width}>
        {dynamicLocation(location, "/overview") && (
        <SubHeaderWrapper>
            <SubHeader color="#1F1F1F">List of {listOf}</SubHeader>
        </SubHeaderWrapper>)
        }   
        <ListsContainer>
            <ListWrapper>
                {roleName && <SubHeader style={{padding: "1rem 0rem"}} color="#1F1F1F">{roleName}</SubHeader>}
                <EachList>
                    <div>
                        <img src={userImg} alt={`${roleName}-logo`} />
                        <NormalFont>{name}</NormalFont>
                    </div>
                    <div className="btnWrap">
                        <ViewButtonComponent background={btnBg} color={btnColor}/>
                    </div>
                </EachList>
            </ListWrapper>
        </ListsContainer>
        </SECTION>
    )
};

export default Lists;