import styled from 'vue-styled-components';

const busProp = { selected: Boolean, list: Boolean };

const BusContent = styled('div', busProp)`
  display: grid;
  grid-template-columns: ${(props) =>
    props.list ? '1fr 3fr 2fr 3fr' : '1fr 3fr'};
  grid-row-gap: 22px;
  background-color: ${(props) => (props.selected ? 'white' : '#1D3051')};
  font-weight: bolder;
  padding: ${(props) =>
    props.list ? '20px 25px 18px 14px' : '20px 20px 12px 14px'};
  border-radius: 4px;
  cursor: pointer;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    line-height: 31px;
    color: ${(props) => (props.selected ? '#091e42' : 'white')};
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > span:first-child {
      font-size: 18px;
      line-height: 21px;
      color: ${(props) => (props.selected ? '#091e42' : 'white')};
    }

    & > span:last-child {
      font-size: 13px;
      line-height: 16px;
      color: ${(props) => (props.selected ? '#8993a4' : '#EBECF0')};
      margin-top: 2px;
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
      & > svg {
        margin-bottom: 2px;
        margin-right: ${(props) => (props.list ? '12px' : '6px')};
      }

      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: ${(props) => (props.list ? '18px' : '12px')};
      line-height: 14px;
      color: #ffc121;
    }

    & > div:last-child {
      & > svg {
        margin-right: ${(props) => (props.list ? '12px' : '6px')};
        margin-bottom: 2px;
      }

      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: ${(props) => (props.list ? '18px' : '12px')};
      line-height: 14px;
      color: #2dc8a6;
    }
  }
`;

export default BusContent;
