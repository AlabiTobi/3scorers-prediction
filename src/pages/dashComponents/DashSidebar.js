import { sidebardata } from "../data/Sidebardata";
import logo from "../../assets/3scorerslogo.png"
import { ItemsWrap, LogoWrap, SidebarLink, SidebarWrapper } from "./dashStyled";
import { useLocation } from "react-router-dom";

const DashSidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

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
                            <SidebarLink className={isActive(item.path) && "active"}
                             to={item.path ?? null}>{item.icon} <span>{item.title}</span>
                             </SidebarLink>
                        </div>
                    )
                })}
            </ItemsWrap>
        </SidebarWrapper>
    )
};

export default DashSidebar;