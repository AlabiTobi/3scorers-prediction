import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components"

//root & global styling
const GlobalStyle = createGlobalStyle`
  *, body, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0 ;
    font-family: "Roboto", sans-serif;
    max-width: 100%;
}
`;

export const OverallContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: #008F8F;
  padding: ${(props) => (props.padding && props.padding)};
`;

export const NormalFont = styled.p`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: 16px;
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "400")};
  line-height: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const LabelFont = styled.label`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
`;

export const SubHeader = styled.p`
  color: ${(props) => (props.color ? props.color : "#FFF")};
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  display: flex;

  @media screen and (max-width: 960px) {
        font-size: 22px;
        line-height: 20px;
        font-weight: 500;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

export const AuthInputWrapper = styled.section`
  width: 360px;
  height: 36px;
  display: flex;
  border-radius: 8px;
  outline: 1.3px solid #000;
`;

export const AuthInput = styled.input`
  height: inherit;
  width: 100%;
  outline: transparent;
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  font-size: 12px;
  color: #000;
  border: none;
`;

export const VisibilityWrapper = styled.div`
  margin: auto;
  top: auto;
  margin-right: 3%;
  cursor: pointer;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-left: 2%;
`;

export const FormButton = styled.button`
  width: 140px;
  height: 38px;
  border-radius: 10px;
  background: #008F8F;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 10%;
  transition: 0.4s;

  &:hover{
    cursor: pointer;
    background: #22b5b5;
  }
  &:disabled {
    background: #aad2d2;
    color: #FFF;
    outline: none;
    border: none;
    cursor: not-allowed;
  }
`;

export const DynamicHeaderFont = styled.h1`
    color: #008F8F;
    font-size: 32px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 26px;
        line-height: 24px;
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 20px;
        line-height: 16px;
    }
    @media screen and (max-width: 360px) {
        font-size: 16px;
        line-height: 14px;
    }
`;

export const ViewButton = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : "#51FFFF" )};
  color: ${(props) => (props.color ? props.color : "#000" )};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background: #afffff;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
    padding: 5px;
  }
  @media screen and (max-width: 480px) {
    font-size: 9px;
    padding: 3px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const HomePageButton = styled.button`
  height: 8vh;
  width: 11vw;
  border: 1.5px none;
  border-radius: 3px;
  background-color: #008F8F;
  color: white;
  cursor: pointer;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    width: 40vw;
  }
`;

export const NPInner = styled.div`
  width: inherit;
  height: 40vh;
  margin-top: 8%;

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30%;

    p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    margin-top: 20%;
  }
`;

export const AnimationContainer = styled.div`
  width: 150px;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 960px) {
  }
`;


export default GlobalStyle;