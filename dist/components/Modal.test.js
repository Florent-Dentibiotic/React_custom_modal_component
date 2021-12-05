"use strict";

var _react = require("@testing-library/react");

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleBackground = jest.fn();
const handleButton = jest.fn();
describe('Modal', () => {
  it('Should render Modal', () => {
    (0, _react.render)( /*#__PURE__*/React.createElement(_Modal.default, {
      backgroundAction: handleBackground,
      modalStyle: 'modal_custom_style',
      content: 'Hello World !',
      contentStyle: 'm-5',
      buttonStyle: 'button_custom_style',
      buttonAction: handleButton
    }));

    const button = _react.screen.getByRole('button');

    _react.fireEvent.click(button);

    expect(handleButton).toHaveBeenCalled();
  });
});