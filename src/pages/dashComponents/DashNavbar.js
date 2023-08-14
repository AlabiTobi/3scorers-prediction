import { NavbarWrapper } from "./dashStyled";
import { useLocation } from "react-router-dom";
import { dynamicHeader } from "../../utils/helpers";
import { DynamicHeaderFont } from "../../GlobalStyles";
import logo from "../../assets/3scorerslogo.png"

const DashNavbar = () => {
    const location = useLocation();

    return (
        <NavbarWrapper>
            <DynamicHeaderFont className="dynamicHeaderFont">{dynamicHeader(location.pathname) ?? "Dashboard"}</DynamicHeaderFont>
            <section>
                <img src={logo} alt="logoIcon" />
                <div>
                    <strong>Rex Steven</strong> <br /> Administrator
                </div>
            </section>
        </NavbarWrapper>
    )
};

export default DashNavbar;