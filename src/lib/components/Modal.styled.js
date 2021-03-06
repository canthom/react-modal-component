import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.overlay ? 'rgba(0,0,0,0.5)' : 'transparent'};

  .popup__inner {
    position: relative;
    width: 100%;
    padding: 32px;
    max-width: 640px;
    background-color: #fff;
  }

  .popup__btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    padding: 1rem;
    border-radius: 30px;
    border: none;
    font-size: 1.5rem;
    background-color: #042825;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: auto;
  }

  .popup__btn span {
    padding: 0 1rem;
  }

  .popup__btn span:last-of-type {
    opacity: 0.6;
  }

  .popup__btn span:hover {
    background-color: rgba(4, 40, 37, 0.75);
  }
`;

export default StyledModal;
