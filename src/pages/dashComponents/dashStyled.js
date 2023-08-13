import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 15%;
  background:#008F8F;
  color: #FFF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const SidebarLink = styled(NavLink)`
  display: block;
  color: ${(props) => (props.color ? props.color : "#FFF")};
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 2rem;
  gap: 0.7rem;
  transition: 0.2s;

  &:hover {
    background: #51FFFF;
    color: #303030;
  }

  &.active {
    background: #51FFFF;
    color: #303030;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background:#FFF;
  box-shadow: 2px 8px 20px 0px rgba(181, 181, 181, 0.20);
  
  strong {
    font-size: 18px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const LogoWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 137px;
  height: 99px;
  padding: 1.5rem;
  margin-top: 0.5rem;
  align-self: center;
`;

export const ItemsWrap = styled.section`
  margin-top: 1.8rem;
`;

export const MainView = styled.main`
  background: #F4F4F4;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  padding: 2rem;
`;

export const MetricsContainer = styled.section`
  width: 346px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: ${(props) => (props.background && props.background)};
  color: #E0E0E0;
  padding: 1rem 0.5rem 1rem 0rem;
  @media screen and (max-width: 1440px) {
  width: 30%;
  height: 155px;
  }
  @media screen and (max-width: 960px) {
  width: 50%;
  height: 140px;
  }
  @media screen and (max-width: 480px) {
  width: 90%;
  }
`;

export const StatContainer = styled.div`
  width: 90%;
  padding: 0rem 1.5rem 0rem 1rem;
`;

export const IconContainer = styled.div`
  width: 70px;
  background: #FFF;
  border-radius: 50%;
  padding: 1rem;
  text-align: center;
`;

export const MetricsWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;