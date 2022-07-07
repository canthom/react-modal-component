"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Popup(props) {
  const MyBtn = props.customButton;
  return props.showPopup ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popup__overlay ".concat(props.overlay === true ? 'popup__overlay--color' : null)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup__inner"
  }, props.customButton ? /*#__PURE__*/_react.default.createElement(MyBtn, null) : /*#__PURE__*/_react.default.createElement("button", {
    className: "popup__btn",
    onClick: props.setShowPopup
  }, "X"), /*#__PURE__*/_react.default.createElement("span", null, props.children))) : '';
}

var _default = Popup;
exports.default = _default;