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
  color: #FFF;
  text-decoration: none;
  margin-bottom: 10px;
  /* background-color: #51FFFF; */
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background:#FFF;
  box-shadow: 2px 8px 20px 0px rgba(181, 181, 181, 0.20);
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


