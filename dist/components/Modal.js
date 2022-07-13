"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = Popup;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("./Modal.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Popup(props) {
  const MyBtn = props.customButton;
  return props.showPopup ? /*#__PURE__*/_react.default.createElement(_Modal.default, {
    overlay: props.overlay
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup__inner"
  }, props.customButton ? /*#__PURE__*/_react.default.createElement(MyBtn, null) : /*#__PURE__*/_react.default.createElement("button", {
    className: "popup__btn",
    onClick: props.closePopup
  }, "X"), /*#__PURE__*/_react.default.createElement("span", null, props.children))) : '';
} // export default Popup;