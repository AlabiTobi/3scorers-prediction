import DashNavbar from "../dashComponents/DashNavbar";
import DashSidebar from "../dashComponents/DashSidebar";
import { Content, Wrapper } from "../dashComponents/dashStyled";

const DashboardLayout = ({children}) => {
    return (
        <Wrapper>
            <DashSidebar />
            <Content>
                <DashNavbar/>
                <div style={{background: "#F4F4F4"}}>
                {children}
                </div>
            </Content>
        </Wrapper>
    )
};

export default DashboardLayout;