import styled from 'vue-styled-components';

const NavSection = styled.nav`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  background-color: #091e42;
  z-index: 50;
  position: sticky;
  top: 2px;
  & > div {
    padding: 68px 80px;
  }
`;

const NavItems = styled.div`
  & > span {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.06em;
    color: white;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  width: 353px;
  display: flex;
  justify-content: space-between;
`;

export { NavItems, NavSection };
