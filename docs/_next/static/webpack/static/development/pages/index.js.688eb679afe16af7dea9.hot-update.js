webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav.css */ "./components/nav.css");
/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/teamva/Documents/GitHub/ux-portfolio/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var links = [{
  href: '',
  label: ''
}, {
  href: '',
  label: ''
}, {
  href: '',
  label: ''
}, {
  href: '',
  label: ''
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Navigation = function Navigation() {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "navNothing",
    bg: "",
    variant: "dark",
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "AK"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      key: key,
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, label);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.688eb679afe16af7dea9.hot-update.js.map