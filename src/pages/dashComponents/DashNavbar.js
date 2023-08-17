import { NavbarWrapper } from "./dashStyled";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter, dynamicHeader } from "../../utils/helpers";
import { DynamicHeaderFont } from "../../GlobalStyles";
import logo from "../../assets/3scorerslogo.png"
import { useSelector } from "react-redux";

const DashNavbar = () => {
    const location = useLocation();
    const state = useSelector(state => state?.loggedIn);
    const firstName = capitalizeFirstLetter(state?.message?.data?.firstName);
    const lastName = capitalizeFirstLetter(state?.message?.data?.lastName);
    const role = capitalizeFirstLetter(state?.message?.data?.role);

    return (
        <NavbarWrapper>
            <DynamicHeaderFont className="dynamicHeaderFont">
                {dynamicHeader(location.pathname) ?? "Dashboard"}
            </DynamicHeaderFont>
            <section>
                <img src={logo} alt="logoIcon" />
                <div>
                    <strong>{firstName} {lastName}</strong> <br /> {role}
                </div>
            </section>
        </NavbarWrapper>
    )
};

export default DashNavbar;