webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Learnings\\Ethereum\\UdemyCourse\\kickstart\\components\\header.js",
    _this = undefined;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    style: {
      backgroundColor: '#37A7E0',
      marginLeft: -2,
      marginRight: -2
    },
    className: "shadow mb-4 text-left text-white header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "col-8",
          style: {
            fontWeight: 'bold !important',
            textShadow: '1px 1px 3px white',
            color: 'white'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              opacity: 0.7
            },
            children: "CAMP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 128
          }, _this), "COIN"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
      position: "right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
        className: "item",
        style: {
          color: 'white'
        },
        children: ["Available on - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Rinkeby Network"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 40
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZm9udFdlaWdodCIsInRleHRTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsMkVBQU07QUFDakIsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0EscUJBQWUsRUFBRSxTQUFsQjtBQUE2QkMsZ0JBQVUsRUFBRSxDQUFDLENBQTFDO0FBQTZDQyxpQkFBVyxFQUFFLENBQUM7QUFBM0QsS0FBYjtBQUNBLGFBQVMsRUFBQyx5Q0FEVjtBQUFBLDRCQUVLLHFFQUFDLDRDQUFEO0FBQU0sV0FBSyxFQUFDLEdBQVo7QUFBQSw2QkFDRztBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBLCtCQUNBO0FBQUksbUJBQVMsRUFBQyxPQUFkO0FBQXNCLGVBQUssRUFBRTtBQUFDQyxzQkFBVSxFQUFFLGlCQUFiO0FBQWdDQyxzQkFBVSxFQUFFLG1CQUE1QztBQUFpRUMsaUJBQUssRUFBRTtBQUF4RSxXQUE3QjtBQUFBLGtDQUErRztBQUFNLGlCQUFLLEVBQUU7QUFBRUMscUJBQU8sRUFBRTtBQUFYLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkwsZUFRSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxjQUFRLEVBQUMsT0FBcEI7QUFBQSw2QkFDUTtBQUFPLGlCQUFTLEVBQUMsTUFBakI7QUFBeUIsYUFBSyxFQUFFO0FBQUNELGVBQUssRUFBRTtBQUFSLFNBQWhDO0FBQUEsbURBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0FsQkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWQ5NTNkYWRjYmQ4MDEzY2U2ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMzdBN0UwJywgbWFyZ2luTGVmdDogLTIsIG1hcmdpblJpZ2h0OiAtMn19ICBcclxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgbWItNCB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBoZWFkZXJcIj5cclxuICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbC04XCIgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCAhaW1wb3J0YW50JywgdGV4dFNoYWRvdzogJzFweCAxcHggM3B4IHdoaXRlJywgY29sb3I6ICd3aGl0ZSd9fT48c3BhbiBzdHlsZT17eyBvcGFjaXR5OiAwLjcgfX0+Q0FNUDwvc3Bhbj5DT0lOPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT4gIFxyXG4gICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIml0ZW1cIiAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgb24gLSA8Yj5SaW5rZWJ5IE5ldHdvcms8L2I+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+ICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==