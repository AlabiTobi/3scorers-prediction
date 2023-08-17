import { NormalFont, SubHeader } from "../../GlobalStyles";
import ViewButtonComponent from "../../components/ViewButtonComponent";
import { dynamicLocation } from "../../utils/helpers";
import { ListsContainer } from "./dashStyled";
import { EachList, ListWrapper, SECTION, SubHeaderWrapper } from "./secondDashStyled";
import { useLocation } from "react-router-dom";
import logo from "../../assets/3scorerslogo.png";

const Lists = ({ searchResults, width, fetchedRoles, showMore, userImg = logo, roleName, listOf, btnBg = "#FFF", btnColor = "#008F8F" }) => {
    const location = useLocation();
    
    const renderUsersList = (users) => {
        return users?.slice(0, 5)?.map((user, index) => (
            <EachList key={index}>
                <div>
                    <img src={userImg} alt={`${roleName}-logo`} />
                    <NormalFont>{user?.firstName} {user?.lastName}</NormalFont>
                </div>
                <div className="btnWrap">
                    <ViewButtonComponent background={btnBg} color={btnColor} />
                </div>
            </EachList>
        ));
    };
    const fullUsersList = (users) => {
        return users?.map((user, index) => (
            <EachList key={index}>
                <div>
                    <img src={userImg} alt={`${roleName}-logo`} />
                    <NormalFont>{user?.firstName} {user?.lastName}</NormalFont>
                </div>
                <div className="btnWrap">
                    <ViewButtonComponent background={btnBg} color={btnColor} />
                </div>
            </EachList>
        ));
    };
    const searchList = (users) => {
        return users?.map((user, index) => (
            <EachList key={index}>
                <div>
                    <img src={userImg} alt={`${roleName}-logo`} />
                    <NormalFont>{user?.firstName} {user?.lastName}</NormalFont>
                </div>
                <div className="btnWrap">
                    <ViewButtonComponent background={btnBg} color={btnColor} />
                </div>
            </EachList>
        ));
    };

    return (
        <SECTION width={width}>
            {dynamicLocation(location, "/overview") && (
                <SubHeaderWrapper>
                    <SubHeader color="#1F1F1F">List of {listOf}</SubHeader>
                </SubHeaderWrapper>
            )}
            <ListsContainer>
                <ListWrapper>
                    {roleName && <SubHeader style={{ padding: "1rem 0rem" }} color="#1F1F1F">{roleName}</SubHeader>}
                    {listOf === "Users" && renderUsersList(fetchedRoles?.userRoles)}
                    {listOf === "Admins" && renderUsersList(fetchedRoles?.adminRoles)}
                    {roleName === "User's Name" && fullUsersList(fetchedRoles?.userRoles)}
                    {roleName === "Admin's Name" && fullUsersList(fetchedRoles?.adminRoles)}
                    {roleName === "Admin results" && searchList(searchResults)}
                    {roleName === "User results" && searchList(searchResults)}
                    {dynamicLocation(location, "/overview") && (
                        <NormalFont className="showMore" onClick={showMore}>
                            show more...
                        </NormalFont>
                    )}
                </ListWrapper>
            </ListsContainer>
        </SECTION>
    );
};

export default Lists;
