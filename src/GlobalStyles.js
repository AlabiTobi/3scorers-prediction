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
  color: #000;
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

export default GlobalStyle;