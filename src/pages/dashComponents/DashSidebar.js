import { sidebardata } from "../data/Sidebardata";
import logo from "../../assets/3scorerslogo.png"
import { ItemsWrap, LogoWrap, SidebarLink, SidebarWrapper } from "./dashStyled";

const DashSidebar = () => {
    return (
        <SidebarWrapper>
            <LogoWrap >
                <img src={logo} alt="3scorers-logo" />
            </LogoWrap>
            <hr style={{margin: "0rem 1rem"}}/>
            <ItemsWrap>
                {sidebardata.map((item, index) => {
                    return (
                        <div key={index}>
                            <SidebarLink to={item.path ?? null}>{item.icon} {item.title}</SidebarLink>
                        </div>
                    )
                })}
            </ItemsWrap>
        </SidebarWrapper>
    )
};

export default DashSidebar;