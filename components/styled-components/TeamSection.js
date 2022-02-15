import styled from 'vue-styled-components';

const TeamContent = styled.div`
  max-width: 1440px;
  width: 100%;
  padding-top: 108px;
`;

export const Titles = styled.div`
  & > span {
    color: #42526e;
    font-size: 16px;
  }

  & > h2 {
    font-size: 33px;
    line-height: 39px;
    color: white;
    margin-block-start: 6px;
  }
  padding: 0 68px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #091e42;
    font-weight: bolder;
    font-family: 'SF Pro Display Bold';
  }

  & > button {
    border: none;
    color: #42526e;
    background-color: transparent;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin-bottom: 60px;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 45px;
  & > a > button {
    background: #091e42;
    border-radius: 35px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    padding: 11px 0;
    width: 112px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

export const AluxionerSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 19.7px;
  grid-row-gap: 40px;
  padding: 0 68px 100px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 525px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 10px 100px;
  }
`;

export const AluxionerCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 210px;
    filter: brightness(60%);
    transition: 1.5s all;
    &:hover {
      filter: brightness(100%);
      transform: scale(1.05);
    }
  }

  & > span {
    font-size: 14px;
    line-height: 17px;
    color: #8993a4;
    font-weight: 400;
  }

  & > h3 {
    color: white;
    line-height: 24px;
    margin-block-start: 20px;
    margin-block-end: 6px;
    font-weight: bold;
  }
`;

export default TeamContent;
