"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

require("./modal.css");

function Modal(_ref) {
  let {
    backgroundAction,
    modalStyle,
    content,
    contentStyle,
    buttonStyle,
    buttonAction
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "custom__modal",
    onClick: backgroundAction
  }, /*#__PURE__*/React.createElement("div", {
    className: modalStyle
  }, /*#__PURE__*/React.createElement("p", {
    className: contentStyle
  }, content), /*#__PURE__*/React.createElement("button", {
    className: buttonStyle,
    onClick: buttonAction
  }, "Close"))));
}