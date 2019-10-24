webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
var _jsxFileName = "C:\\projects\\tmse_nextjs\\components\\MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var styles = {
  '.container': {
    display: 'grid',
    margin: '0 auto',
    width: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: '140px 30px auto',
    gridColumnGap: '1rem',
    gridRowGap: '1rem',
    '@media screen and (min-width: $desktop-small)': {
      width: '900px',
      gridTemplateColumns: '900px'
    }
  }
};

var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), props.children));
};

var StyledLayout = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["default"])(styles)(Layout);
/* harmony default export */ __webpack_exports__["default"] = (StyledLayout);

/***/ })

})
//# sourceMappingURL=index.js.46d0b15578ce73973c35.hot-update.js.map