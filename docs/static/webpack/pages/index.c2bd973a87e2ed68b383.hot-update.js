webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "D:\\Learnings\\Ethereum\\UdemyCourse\\kickstart\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var CampaignIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignIndex, _Component);

  var _super = _createSuper(CampaignIndex);

  function CampaignIndex() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CampaignIndex);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CampaignIndex, [{
    key: "renderCampaigns",
    // This method Works for create-react-app project for initial data loading
    // async componentDidMount(){}
    value: function renderCampaigns() {
      var _this = this;

      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            route: "/campaigns/".concat(address),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
                circular: true,
                color: "blue",
                name: "sign-in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 25
              }, _this), "View Campaign"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 22
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this),
          fluid: true
        };
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"].Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: "Campaigns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            route: "/campaigns/new",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
                floated: "right",
                content: "Create Campaign",
                icon: "add circle",
                labelPosition: "left",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, this), this.renderCampaigns()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    // This method works for nextjs for initial data loading. Its a static method.
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var campaigns;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__["default"].methods.getDeployedCampaign().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", {
                  campaigns: campaigns
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsImZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbiIsImNhbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7QUFTRjtBQUNBO3NDQUVpQjtBQUFBOztBQUNiLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLE9BQU8sRUFBRTtBQUM1QyxlQUFPO0FBQ0hDLGdCQUFNLEVBQUVELE9BREw7QUFFSEUscUJBQVcsZUFDUCxxRUFBQyw2Q0FBRDtBQUFNLGlCQUFLLHVCQUFnQkYsT0FBaEIsQ0FBWDtBQUFBLG1DQUNDO0FBQUEsc0NBQUcscUVBQUMsdURBQUQ7QUFBTSx3QkFBUSxNQUFkO0FBQWUscUJBQUssRUFBQyxNQUFyQjtBQUE0QixvQkFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQU1IRyxlQUFLLEVBQUU7QUFOSixTQUFQO0FBUUgsT0FUYSxDQUFkO0FBV0EsMEJBQU8scUVBQUMsdURBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFUDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7OzZCQUVPO0FBQ0osMEJBQ0kscUVBQUMsMkRBQUQ7QUFBQSwrQkFDQTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBR0kscUVBQUMsNkNBQUQ7QUFBTSxpQkFBSyxFQUFDLGdCQUFaO0FBQUEsbUNBQ0k7QUFBQSxxQ0FDSSxxRUFBQyx5REFBRDtBQUFRLHVCQUFPLEVBQUMsT0FBaEI7QUFBd0IsdUJBQU8sRUFBQyxpQkFBaEM7QUFBa0Qsb0JBQUksRUFBQyxZQUF2RDtBQUFvRSw2QkFBYSxFQUFDLE1BQWxGO0FBQXlGLHVCQUFPO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixFQVFLLEtBQUtRLGVBQUwsRUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFlSDs7O0FBekNEOzs7Ozs7Ozs7dUJBRTRCQyx5REFBTyxDQUFDQyxPQUFSLENBQWdCQyxtQkFBaEIsR0FBc0NDLElBQXRDLEU7OztBQUFsQlYseUI7aURBRUM7QUFBQ0EsMkJBQVMsRUFBVEE7QUFBRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU5hVywrQzs7QUE4Q2JkLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyYmQ5NzNhODdlMmVkNjhiMzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnOyBcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgLy8gVGhpcyBtZXRob2Qgd29ya3MgZm9yIG5leHRqcyBmb3IgaW5pdGlhbCBkYXRhIGxvYWRpbmcuIEl0cyBhIHN0YXRpYyBtZXRob2QuXHJcbiAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWduKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge2NhbXBhaWduc307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBtZXRob2QgV29ya3MgZm9yIGNyZWF0ZS1yZWFjdC1hcHAgcHJvamVjdCBmb3IgaW5pdGlhbCBkYXRhIGxvYWRpbmdcclxuICAgIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7fVxyXG5cclxuICAgIHJlbmRlckNhbXBhaWducygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3M9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOihcclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8YT48SWNvbiBjaXJjdWxhciBjb2xvcj0nYmx1ZScgbmFtZT0nc2lnbi1pbicgLz5WaWV3IENhbXBhaWduPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+KSxcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPkNhbXBhaWduczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIGNvbnRlbnQ9J0NyZWF0ZSBDYW1wYWlnbicgaWNvbj0nYWRkIGNpcmNsZScgbGFiZWxQb3NpdGlvbj0nbGVmdCcgcHJpbWFyeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDsiXSwic291cmNlUm9vdCI6IiJ9