import React from 'react';
import StyledModal from './Modal.styled';

function Popup(props) {
  console.log(props.overlay === true);
  const MyBtn = props.customButton;
  return props.showPopup ? (
    <StyledModal>
      <div className="popup__inner">
        {props.customButton ? (
          <MyBtn />
        ) : (
          <button className="popup__btn" onClick={props.closePopup}>
            X
          </button>
        )}

        <span>{props.children}</span>
      </div>
    </StyledModal>
  ) : (
    ''
  );
}

export default Popup;
