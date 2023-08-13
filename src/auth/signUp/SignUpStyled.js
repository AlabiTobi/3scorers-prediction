import { styled } from "styled-components";

export const RowBody = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
    flex-direction: column;
    }
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
        margin-bottom: 1.8rem;
    };
    p {
        width: 248px;
        text-align: center;
        font-weight: 700;
        color: #C8C8C8;
    };
    @media screen and (max-width: 768px) {
    img {
        margin-bottom: 0.3rem;
        width: 80px;
        height: 50px;
    };
    p {

    }    
    }
`;

export const SecondHalf = styled(FirstHalf)`
    background-color: #FFF;
    p{
        text-align: start;
        color: #ce2626;
    }
    @media screen and (max-width: 768px) {
    width: 60%;
    padding: 1rem 0rem;
    border-radius: 1.3rem;
    margin-bottom: 2rem;
    };
    @media screen and (max-width: 480px) {
    width: 90%;
    };
`;

export const HugeHeaderFont = styled.h1`
    color: ${(props) => (props.color ? props.color : "#FFF")};
    font-size: 40px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 24px;
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 24px;
        line-height: 16px;
    }
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