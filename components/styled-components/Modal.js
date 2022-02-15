import styled from 'vue-styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(9, 30, 66, 0.95);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  & .modal {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 4px 4px 25px 1px rgba(0, 0, 0, 0.2);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 123px;
  }
`;

export default Modal;
