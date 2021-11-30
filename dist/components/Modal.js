"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

require("./modal.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  let {
    zindex,
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(zindex, " custom__modal"),
    onClick: backgroundAction
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: contentStyle
  }, content), /*#__PURE__*/_react.default.createElement("button", {
    className: buttonStyle,
    onClick: buttonAction
  }, "Close"))));
}