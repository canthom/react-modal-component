import React from 'react';
import './Modal.css';

function Popup(props) {
  const MyBtn = props.customButton;
  return props.showPopup ? (
    <div
      className={`popup__overlay ${
        props.overlay === true ? 'popup__overlay--color' : null
      }`}
    >
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
    </div>
  ) : (
    ''
  );
}

export default Popup;
