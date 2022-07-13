import React from 'react';
import StyledModal from './Modal.styled';

export function Popup(props) {
  const MyBtn = props.customButton;
  return props.showPopup ? (
    <StyledModal overlay={props.overlay}>
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

// export default Popup;
