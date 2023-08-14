import { NavbarWrapper } from "./dashStyled";
import { useLocation } from "react-router-dom";
import { dynamicHeader } from "../../utils/helpers";
import { HugeHeaderFont } from "../../auth/signUp/SignUpStyled";
import { DynamicHeaderFont } from "../../GlobalStyles";

const DashNavbar = () => {
    const location = useLocation();

    return (
        <NavbarWrapper>
            <DynamicHeaderFont>{dynamicHeader(location.pathname) ?? "Dashboard"}</DynamicHeaderFont>
            <div><strong>Rex Steven</strong> <br /> Administrator</div>
        </NavbarWrapper>
    )
};

export default DashNavbar;