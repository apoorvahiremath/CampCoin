module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T4VJ");


/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__("90Kz")();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZHh6");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("aIN1");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xMo/");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["a"] = (props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: props.children
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {})]
  });
});

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "MDWq":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "T4VJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: ./ethereum/campaign.js
var ethereum_campaign = __webpack_require__("VC3L");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__("oZBQ");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// CONCATENATED MODULE: ./components/contributeForm.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class contributeForm_ContributeForm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true,
        errorMessage: ''
      });

      try {
        const campaign = Object(ethereum_campaign["a" /* default */])(this.props.address);
        const accounts = await web3["a" /* default */].eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3["a" /* default */].utils.toWei(this.state.value, 'ether')
        });
        this.setState({
          errorMessage: ''
        });
        this.setState({
          loading: false
        });
        routes["Router"].replaceRoute(`/campaigns/${this.props.address}`);
      } catch (error) {
        this.setState({
          errorMessage: error.message
        });
        this.setState({
          loading: false
        });
      }
    });
  }

  render() {
    return (
      /*#__PURE__*/
      // <h3>Contribute to this Campaign</h3>
      Object(jsx_runtime_["jsx"])("div", {
        className: "shadow-sm p-3 mb-5 bg-white rounded",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Form"], {
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Form"].Field, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              children: "Amount to Contribute"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Input"], {
              label: "ether",
              labelPosition: "right",
              value: this.state.value,
              onChange: event => this.setState({
                value: event.target.value
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Message"], {
            error: true,
            header: "Oops!",
            content: this.state.errorMessage
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Button"], {
            primary: true,
            loading: this.state.loading,
            children: "Contribute!"
          })]
        })
      })
    );
  }

}

/* harmony default export */ var contributeForm = (contributeForm_ContributeForm);
// CONCATENATED MODULE: ./pages/campaigns/show.js










class show_CampaignShow extends external_react_["Component"] {
  static async getInitialProps(props) {
    const campaign = Object(ethereum_campaign["a" /* default */])(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [{
      header: manager,
      meta: 'Address of Manager',
      description: 'The manager created this campaign and can create requests to withdraw money',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: minimumContribution,
      meta: 'Minimum Contribution (wei)',
      description: 'You must contribute at least this much wei to become an approver'
    }, {
      header: requestsCount,
      meta: 'Number of Requests',
      description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
    }, {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people who have already donated to this campaign'
    }, {
      header: web3["a" /* default */].utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description: 'The balance is how much money this campaign has left to spend.'
    }];
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Card"].Group, {
      items: items
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(layout["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
        route: `/`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Icon"], {
            circular: true,
            color: "blue",
            name: "arrow left"
          }), "Back"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Campaign Show"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Row, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Column, {
            children: this.renderCards()
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Row, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Column, {
            width: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(contributeForm, {
              address: this.props.address
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Column, {
            width: 4
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Column, {
            width: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
              route: `/campaigns/${this.props.address}/requests`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Button"], {
                  primary: true,
                  children: "View Requests"
                })
              })
            })
          })]
        })]
      })]
    });
  }

}

/* harmony default export */ var show = __webpack_exports__["default"] = (show_CampaignShow);

/***/ }),

/***/ "VC3L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oZBQ");

const abi = [{
  "inputs": [{
    "internalType": "uint256",
    "name": "minimum",
    "type": "uint256"
  }, {
    "internalType": "address",
    "name": "creator",
    "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "approveRequest",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "approvers",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "approversCount",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "contribute",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "description",
    "type": "string"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }, {
    "internalType": "address payable",
    "name": "recipient",
    "type": "address"
  }],
  "name": "createRequest",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "finalizeRequest",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "getRequestCount",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "getSummary",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "manager",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "minimumContribution",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "requests",
  "outputs": [{
    "internalType": "string",
    "name": "description",
    "type": "string"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }, {
    "internalType": "address payable",
    "name": "recipient",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "complete",
    "type": "bool"
  }, {
    "internalType": "uint256",
    "name": "approvalCounts",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}];
/* harmony default export */ __webpack_exports__["a"] = (address => {
  const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract(abi, address);
  return instance;
});

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["a"] = (() => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    style: {
      backgroundColor: '#37A7E0',
      marginLeft: -2,
      marginRight: -2
    },
    className: "shadow mb-4 text-left text-white header",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        className: "item",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h3", {
          className: "col-8",
          style: {
            fontWeight: 'bold !important',
            textShadow: '1px 1px 3px white',
            color: 'white'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            style: {
              opacity: 0.7
            },
            children: "CAMP"
          }), "COIN"]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
      position: "right",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("small", {
        className: "item",
        style: {
          color: 'white'
        },
        children: ["Available on - ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
          children: "Rinkeby Network"
        })]
      })
    })]
  });
});

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


 // import './footer.css'

/* harmony default export */ __webpack_exports__["a"] = (() => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "text-center p-3",
    style: {
      padding: 15,
      textAlign: 'center',
      fontSize: 14,
      backgroundColor: 'lightgray',
      color: '#37A7E0',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 50
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      style: {
        opacity: 0.7
      },
      children: "\xA9 2021 Copyright: "
    }), "Developed by ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
      target: "_blank",
      style: {
        color: '#2284b6'
      },
      href: "https://www.linkedin.com/in/apoorva-hiremath-68a1a219",
      children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
        children: "Apoorva Hiremath"
      })]
    })]
  });
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oZBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MDWq");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
 //rip off the metamask's provider and create our version of web3 with it.
// const provider = window.ethereum;
// provider.enable(); 
// Window object is not available when Next js server side renderring is used
// Hence this approach does not work for us.
// const web3 = new Web3(window.web3.currentProvider);

let web3;

if (false) {} else {
  // We are on the server *OR* the user is not running Metamask
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/ab47d39a4140483d90e9587159364410");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "xMo/":
/***/ (function(module, exports) {



/***/ })

/******/ });