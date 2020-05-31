webpackHotUpdate("static/development/pages/lululiv-website.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav.css */ \"./components/nav.css\");\n/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/teamva/Documents/GitHub/ux-portfolio/components/nav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar links = [{\n  href: \"/\",\n  label: \"Home\"\n}, {\n  href: \"/portfolio\",\n  label: \"Portfolio\"\n}, {\n  href: \"./static/aaronkonopka-cv.pdf\",\n  label: \"CV\"\n}].map(function (link) {\n  link.key = \"nav-link-\".concat(link.href, \"-\").concat(link.label);\n  return link;\n});\n\nvar Navigation = function Navigation() {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n    className: \"ak-nav navNothing\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"ak--container d-flex w-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Brand, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"AK\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"basic-navbar-nav\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Collapse, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, links.map(function (_ref) {\n    var key = _ref.key,\n        href = _ref.href,\n        label = _ref.label;\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n      key: key,\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, label);\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    className: \"ml-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"#get-in-touch\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Contact\")))));\n};\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbImxpbmtzIiwiaHJlZiIsImxhYmVsIiwibWFwIiwibGluayIsImtleSIsIk5hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsTUFBSSxFQUFFLEdBQVI7QUFBYUMsT0FBSyxFQUFFO0FBQXBCLENBRFksRUFFWjtBQUFFRCxNQUFJLEVBQUUsWUFBUjtBQUFzQkMsT0FBSyxFQUFFO0FBQTdCLENBRlksRUFHWjtBQUFFRCxNQUFJLEVBQUUsOEJBQVI7QUFBd0NDLE9BQUssRUFBRTtBQUEvQyxDQUhZLEVBSVpDLEdBSlksQ0FJUixVQUFBQyxJQUFJLEVBQUk7QUFDWkEsTUFBSSxDQUFDQyxHQUFMLHNCQUF1QkQsSUFBSSxDQUFDSCxJQUE1QixjQUFvQ0csSUFBSSxDQUFDRixLQUF6QztBQUNBLFNBQU9FLElBQVA7QUFDRCxDQVBhLENBQWQ7O0FBU0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUNqQixNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLG1CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUscUJBQWMsa0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sS0FBSyxDQUFDRyxHQUFOLENBQVU7QUFBQSxRQUFHRSxHQUFILFFBQUdBLEdBQUg7QUFBQSxRQUFRSixJQUFSLFFBQVFBLElBQVI7QUFBQSxRQUFjQyxLQUFkLFFBQWNBLEtBQWQ7QUFBQSxXQUNULE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsU0FBRyxFQUFFRyxHQUFmO0FBQW9CLFVBQUksRUFBRUosSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxLQURILENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixFQVFFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FSRixDQUxGLENBREYsQ0FEaUI7QUFBQSxDQUFuQjs7S0FBTUksVTtBQXVCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IE5hdmJhciwgTmF2IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9uYXYuY3NzXCI7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6IFwiL1wiLCBsYWJlbDogXCJIb21lXCIgfSxcbiAgeyBocmVmOiBcIi9wb3J0Zm9saW9cIiwgbGFiZWw6IFwiUG9ydGZvbGlvXCIgfSxcbiAgeyBocmVmOiBcIi4vc3RhdGljL2Fhcm9ua29ub3BrYS1jdi5wZGZcIiwgbGFiZWw6IFwiQ1ZcIiB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gO1xuICByZXR1cm4gbGluaztcbn0pO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKFxuICA8TmF2YmFyIGNsYXNzTmFtZT1cImFrLW5hdiBuYXZOb3RoaW5nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhay0tY29udGFpbmVyIGQtZmxleCB3LTEwMFwiPlxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxuICAgICAgICA8c3Ryb25nPkFLPC9zdHJvbmc+XG4gICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDxOYXY+XG4gICAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgIDxOYXYuTGluayBrZXk9e2tleX0gaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTmF2PlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldC1pbi10b3VjaFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgPC9kaXY+XG4gIDwvTmF2YmFyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})