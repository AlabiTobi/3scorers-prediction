import { styled } from "styled-components";

export const ListWrapper = styled.section`
  width: 100%;
  /* height: 100%; */
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 24px 0px rgba(172, 172, 172, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* @media screen and (max-width: 768px) {
    width: 100%;
  } */
`;
export const SECTION = styled.section`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ManinViewContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const EachList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #D6D9DF;
  border-bottom: 1px solid #D6D9DF;
  padding: 1rem 0rem;

  @media screen and (max-width: 960px) {
    /* padding: 1rem 0rem; */
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0rem;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const SubHeaderWrapper = styled.section`
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
  };
`;