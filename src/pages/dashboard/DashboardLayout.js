import DashNavbar from "../dashComponents/DashNavbar";
import DashSidebar from "../dashComponents/DashSidebar";
import { Content, Wrapper } from "../dashComponents/dashStyled";

const DashboardLayout = ({children}) => {
    return (
        <Wrapper>
            <DashSidebar />
            <Content>
                <DashNavbar/>
                {children}
            </Content>
        </Wrapper>
    )
};

export default DashboardLayout;