"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LinkTree.js":
/*!********************************!*\
  !*** ./components/LinkTree.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ \"./components/link.js\");\n\n\n\n\n\nfunction LinkTree() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: _link__WEBPACK_IMPORTED_MODULE_4__.link.map((val, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: val.link,\n                className: \"bg-thisAnotherOrange rounded-lg items-center flex space-x-3 px-1 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: val.image,\n                        width: 25,\n                        height: 25,\n                        alt: val.name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\YouTube\\\\linktree\\\\components\\\\LinkTree.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-semibold\",\n                        children: val.name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\YouTube\\\\linktree\\\\components\\\\LinkTree.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, index + 1, true, {\n                fileName: \"E:\\\\YouTube\\\\linktree\\\\components\\\\LinkTree.js\",\n                lineNumber: 9,\n                columnNumber: 35\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\YouTube\\\\linktree\\\\components\\\\LinkTree.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = LinkTree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkTree);\nvar _c;\n$RefreshReg$(_c, \"LinkTree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtUcmVlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNGO0FBQ0g7QUFDRTtBQUMzQixTQUFTSSxXQUFXO0lBQ2xCLHFCQUNFLDhEQUFDQztrQkFFT0YsMkNBQVEsQ0FBQyxDQUFDSSxLQUFJQyxzQkFBUSw4REFBQ1Asa0RBQUlBO2dCQUFDUSxNQUFNRixJQUFJSixJQUFJO2dCQUFnQk8sV0FBVTs7a0NBQ2hFLDhEQUFDVixtREFBS0E7d0JBQUNXLEtBQUtKLElBQUlLLEtBQUs7d0JBQUVDLE9BQU87d0JBQUlDLFFBQVE7d0JBQUlDLEtBQUtSLElBQUlTLElBQUk7Ozs7OztrQ0FDM0QsOERBQUNDO3dCQUFFUCxXQUFVO2tDQUF5QkgsSUFBSVMsSUFBSTs7Ozs7OztlQUZEUixRQUFNOzs7Ozs7Ozs7O0FBT25FO0tBWFNKO0FBYVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rVHJlZS5qcz9kZjZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtsaW5rfSBmcm9tICcuL2xpbmsnXHJcbmZ1bmN0aW9uIExpbmtUcmVlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluay5tYXAoKHZhbCxpbmRleCk9PjxMaW5rIGhyZWY9e3ZhbC5saW5rfSBrZXk9e2luZGV4KzF9IGNsYXNzTmFtZT1cImJnLXRoaXNBbm90aGVyT3JhbmdlIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIGZsZXggc3BhY2UteC0zIHB4LTEgXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt2YWwuaW1hZ2V9IHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gYWx0PXt2YWwubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz57dmFsLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+KVxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1RyZWUiXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJsaW5rIiwiTGlua1RyZWUiLCJkaXYiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImhyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkTree.js\n"));

/***/ })

});