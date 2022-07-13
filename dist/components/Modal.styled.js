"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledModal = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n\n  .popup__inner {\n    position: relative;\n    width: 100%;\n    padding: 32px;\n    max-width: 640px;\n    background-color: #fff;\n  }\n\n  .popup__btn {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    width: 50px;\n    height: 50px;\n    padding: 1rem;\n    border-radius: 30px;\n    border: none;\n    font-size: 1.5rem;\n    background-color: #042825;\n    color: white;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.2s;\n    margin-left: auto;\n  }\n\n  .popup__btn span {\n    padding: 0 1rem;\n  }\n\n  .popup__btn span:last-of-type {\n    opacity: 0.6;\n  }\n\n  .popup__btn span:hover {\n    background-color: rgba(4, 40, 37, 0.75);\n  }\n"])), props => props.overlay ? 'rgba(0,0,0,0.5)' : 'transparent');

var _default = StyledModal;
exports.default = _default;