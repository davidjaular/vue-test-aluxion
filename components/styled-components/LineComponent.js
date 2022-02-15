import styled from 'vue-styled-components';

const lineProps = { list: Boolean };

const LineContent = styled('div', lineProps)`
  margin-top: 50px;
  padding-bottom: 10px;

  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > span {
      font-size: 20px;
      line-height: 23px;
      color: white;
    }

    & > svg {
      margin: 0 17px 3px;
    }
  }

  & > div:last-child {
    display: grid;
    grid-template-columns: ${(props) => (props.list ? '1fr' : '1fr 1fr')};
    grid-gap: 16px;
    margin-top: 20px;
  }
`;

export default LineContent;
