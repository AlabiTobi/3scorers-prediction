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

  @media screen and (max-width: 768px) {
    padding: 0.3rem;
  }
`;
export const SECTION = styled.section`
  width: ${(props) => (props.width ? props.width : "50%")};

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
  padding: 0.5rem;
  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  @media screen and (max-width: 960px) {
    /* padding: 1rem 0rem; */
  }
  @media screen and (max-width: 768px) {
    padding: 0.3rem;

    img {
      width: 25px;
      height: 25px;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    .btnWrap {
      align-self: flex-end;
    }
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 25%;
    right: 0;
    height: 50%;
    width: 3px;
    background-color: #008F8F;
    border-radius: 2px;
  }
`;

export const SubHeaderWrapper = styled.section`
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
  };
`;

export const SearchWrapper = styled.section`
  width: 100%;
  background: #008F8F;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    padding: 0.3rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    padding: 0.3rem;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    select {
      width: 100%;
    }
  }
`;

export const SearchContainer = styled.section`
  width: 200px;
  height: 30px;
  display: flex;
  border-radius: 5px;
  outline: none;
  background: #FFF;

  @media screen and (max-width: 480px) {
    width: 120px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'text'
})`
  border-radius: 5px;
  height: inherit;
  width: 100%;
  outline: transparent;
  padding: 0rem 0.3rem;
  background-color: transparent;
  font-size: 12px;
  color: #000;
  border: none;
`;

export const IconWrapper = styled.div`
  margin: auto;
  top: auto;
  margin-left: 3%;
  cursor: pointer;
`;
