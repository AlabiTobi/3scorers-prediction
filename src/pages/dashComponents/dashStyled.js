import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
  position: fixed;
  width: 15%;
  background:#008F8F;
  color: #FFF;
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  @media screen and (max-width: 960px) {
    width: 5%;
  }
  @media screen and (max-width: 768px) {
    width: 10%;
  }
  @media screen and (max-width: 350px) {
    width: 20%;
  }
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

  @media screen and (max-width: 960px) {
    padding: 0.1rem;
    justify-content: center;
    span {
      display: none;
    }
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background:#FFF;
  box-shadow: 2px 8px 20px 0px rgba(181, 181, 181, 0.20);
  position: fixed;
  top: 0;
  width: 85%;
  z-index: 2;

  section {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    background: #c7bdbd;
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }
  strong {
    font-size: 18px;
  }
  @media screen and (max-width: 960px) {
    width: 95%;
  }
   @media screen and (max-width: 768px) {
    padding: 1.5rem;
    width: 90%;

    div, strong {
    font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
  @media screen and (max-width: 350px) {
    width: 80%;

    .dynamicHeaderFont {
      display: none;
    }
  }
`;

export const Wrapper = styled.section`
  display: flex;
  background: #008F8F;
`;

export const Content = styled.div`
  flex: 1;
  top: 0;
  position: relative;
  width: 85%;
  margin-left: 15%;
  background: #F4F4F4;

  @media screen and (max-width: 960px) {
    margin-left: 5%;
    width: 95%;
  }
   @media screen and (max-width: 768px) {
    margin-left: 10%;
    width: 90%;
  }
   @media screen and (max-width: 350px) {
    margin-left: 20%;
    width: 80%;
  }
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

  @media screen and (max-width: 960px) {
    padding: 0.1rem;
  }
`;

export const ItemsWrap = styled.section`
  margin-top: 1.8rem;
`;

export const MainView = styled.main`
  background: #F4F4F4;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 6rem;
    padding: 0.3rem;
  }
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
  width: 60%;
  height: 140px;
  }
  @media screen and (max-width: 480px) {
  width: 100%;
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
  gap: 1rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ListsContainer = styled(MetricsWrapper)`
  margin-top: 0.5rem;
  background: #F4F4F4;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;