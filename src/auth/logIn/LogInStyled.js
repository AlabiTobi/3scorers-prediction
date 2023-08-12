import { styled } from "styled-components";
import { RowBody } from "../signUp/SignUpStyled";

export const ColumnBody = styled(RowBody)`
    flex-direction: column;
    justify-content: start;
`;

export const Half1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    margin-top: 1rem;
`;

export const Half2 = styled(Half1)`
    background-color: #FFF;
    border-radius: 1.3rem;
    width: 30%;
    height: 100%;
    margin-bottom: 5rem;
    p{
        text-align: start;
        color: #ce2626;
    };
    @media screen and (max-width: 1100px) {
    width: 40%;
    };
    @media screen and (max-width: 769px) {
    width: 60%;
    };
    @media screen and (max-width: 480px) {
    width: 90%;
    };

`;