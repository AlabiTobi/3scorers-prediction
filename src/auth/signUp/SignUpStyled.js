import { styled } from "styled-components";

export const RowBody = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FirstHalf = styled.div`
    background-color: #008F8F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
        margin-bottom: 2rem;
    }
    p {
        width: 248px;
        text-align: center;
        font-weight: 700;
        color: #C8C8C8;
    }
`;

export const SecondHalf = styled(FirstHalf)`
    background-color: #FFF;
    p{
        text-align: start;
        color: #ce2626;
    }
`;

export const HugeHeaderFont = styled.h1`
    color: #FFF;
    font-size: 40px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 85%;
    height: 100%;
`;