import styled from 'vue-styled-components';

const SearchContent = styled.section`
  max-width: 1440px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  position: sticky;
  top: 157px;
  z-index: 50;
  background-color: #091e42;
  padding-bottom: 42px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > div {
      display: flex;
      justify-content: center;
      padding: 0;
    }
  }
`;

const TitleText = styled.div`
  & > span {
    color: white;
    font-weight: bold;
    font-size: 94px;
    line-height: 105px;
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  margin-top: 240px;
  padding-left: 68px;
  display: flex;
  align-items: end;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const searchProps = { searchPage: Boolean };

const Search = styled('div', searchProps)`
  padding: ${(props) => (props.searchPage ? '0' : '15px 68px 0 0')};
  flex: 1;
  display: flex;
  justify-content: end;
  margin-top: ${(props) => (props.searchPage ? '0' : '385px')};
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);

  & > div {
    position: relative;
    & > a > svg {
      position: absolute;
      right: 2px;
      top: 5px;
      cursor: pointer;
    }
    & > label {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      transition: 0.2s;
      font-size: 16px;
      color: #8993a4;
      pointer-events: none;
    }
    & > input {
      border: 0;
      border-bottom: 1px solid #8993a4;
      outline: 0;
      font-size: 16px;
      width: ${(props) => (props.searchPage ? '219px' : '400px')};
      color: #8993a4;
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;
      &:focus {
        border-width: 2px;
        border-color: white;
        ~ .focus {
          position: absolute;
          top: -18px;
          color: white;
          transition: 0.2s;
        }
      }

      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ label {
        font-size: 16px;
        cursor: text;
        top: 5px;
      }
    }
  }
`;

export { SearchContent, TitleText, Search };
