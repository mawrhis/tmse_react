webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var _jsxFileName = "C:\\projects\\tmse_nextjs\\components\\Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var styles = {
  button: {
    width: '100px',
    height: '32px',
    margin: '.5rem',
    left: '-1px',
    top: '-3px',
    background: 'white',
    fontWeight: '600',
    fontSize: '14px',
    textAlign: 'center',
    color: 'grey',
    borderRadius: '5px',
    border: 'solid 1px white',
    boxShadow: 'inset 0px 0px 5px 5px rgba(255,255,255,1)',
    transition: 'background 500ms, color 300ms, box-shadow 150ms',
    '&:hover': {
      background: '#1EB6A7',
      color: 'white',
      cursor: 'pointer',
      border: 'solid 2px grey',
      boxShadow: 'inset 0px 0px 5px 5px rgba(30,182,167,1)',
      transition: 'background 300ms, color 300ms, box-shadow 150ms'
    },
    '&:disabled': {
      cursor: 'default',
      color: 'grey'
    },
    '&:disabled:hover': {
      backgroundColor: 'white',
      boxShadow: 'none',
      border: 'none'
    }
  }
};

var Button = function Button(_ref) {
  var classes = _ref.classes,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["classes"]);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("button", {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["default"])(styles)(Button));

/***/ })

})
//# sourceMappingURL=index.js.4de0c8ea94f5d5023188.hot-update.js.map