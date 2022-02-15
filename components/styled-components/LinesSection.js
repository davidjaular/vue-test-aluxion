import styled from 'vue-styled-components';

const LinesContet = styled.div`
  margin-top: 80px;

  & > span {
    font-size: 16px;
    line-height: 19px;
    color: #42526e;
    font-weight: bolder;
  }

  & > div:nth-child(3) {
    width: 100%;
    height: 0.5px;
    background-color: #42526e;
    margin-top: 8px;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;

  & > span {
    font-size: 33px;
    font-weight: bolder;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.9);
  }

  & > div {
    width: 50px;
    display: flex;
    justify-content: space-between;
    & > svg {
      cursor: pointer;
    }
  }
`;

export default LinesContet;
