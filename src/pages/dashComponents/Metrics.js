import { NormalFont, SubHeader } from "../../GlobalStyles";
import { IconContainer, MetricsContainer, MetricsWrapper, StatContainer } from "./dashStyled";
import { TbUsers } from "react-icons/tb";
import { LiaUsersSolid } from "react-icons/lia"

const Metrics = ({totalUsers, totalAdmins}) => {
    const metricsdata = [
        {
            role: "USERS",
            amount: totalUsers,
            icon: <TbUsers style={{color: "#008F8F"}} size="1.5rem"/>,
            background: "#004F4F",
        },
        {
            role: "ADMINS",
            amount: totalAdmins,
            icon: <LiaUsersSolid style={{color: "#008F8F"}} size="1.6rem"/>,
            background: "#008F8F",
        },
    ]
    return (
        <MetricsWrapper>
        {metricsdata.map((metric, index) => {
            return (
                <MetricsContainer key={index} background={metric.background}>
                    <StatContainer>
                        <NormalFont color="#E0E0E0">TOTAL NUMBER OF {metric.role}</NormalFont>
                        <SubHeader style={{marginTop: "1rem"}}>{metric.amount}</SubHeader>
                    </StatContainer>
                    <IconContainer>{metric.icon}</IconContainer>
                </MetricsContainer>
            )
        })}
        </MetricsWrapper>
    );
};

export default Metrics;