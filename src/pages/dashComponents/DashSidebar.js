import { sidebardata } from "../data/Sidebardata";
import logo from "../../assets/3scorerslogo.png"
import { ItemsWrap, LogoWrap, SidebarLink, SidebarWrapper } from "./dashStyled";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearDetails } from "../../redux/slices/loggedInSlice";
import { toast } from "react-toastify";

const DashSidebar = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(clearDetails());
        toast.success("Logged out successfully");
    };

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
                            <SidebarLink to={item.path ?? null}
                             className={isActive(item.path) && "active"}
                             onClick={item.title === "Logout" ? handleLogoutClick : undefined}
                             >
                                {item.icon} <span>{item.title}</span>
                             </SidebarLink>
                        </div>
                    )
                })}
            </ItemsWrap>
        </SidebarWrapper>
    )
};

export default DashSidebar;