module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "OIDg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oZBQ");

const bytecode = "608060405234801561001057600080fd5b50610ec9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063339d50a5146100465780635eac0007146100b4578063a3303a7514610113575b600080fd5b6100726004803603602081101561005c57600080fd5b8101908080359060200190929190505050610141565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100bc61017d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100ff5780820151818401526020810190506100e4565b505050509050019250505060405180910390f35b61013f6004803603602081101561012957600080fd5b810190808035906020019092919050505061020b565b005b6000818154811061014e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080548060200260200160405190810160405280929190818152602001828054801561020157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101b7575b5050505050905090565b6000813360405161021b906102de565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f080158015610274573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610ba8806102ec8339019056fe608060405234801561001057600080fd5b50604051610ba8380380610ba88339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028190555060006004819055505050610af9806100af6000396000f3fe6080604052600436106100865760003560e01c806382fde0931161005957806382fde093146102865780638a9cfd55146102b1578063937e09b1146103a3578063d7bb99ba146103ce578063d7d1bbdb146103d857610086565b8063034410061461008b5780630a144391146100c6578063481c6a751461012f57806381d12c5814610186575b600080fd5b34801561009757600080fd5b506100c4600480360360208110156100ae57600080fd5b8101908080359060200190929190505050610413565b005b3480156100d257600080fd5b50610115600480360360208110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610553565b604051808215151515815260200191505060405180910390f35b34801561013b57600080fd5b50610144610573565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019257600080fd5b506101bf600480360360208110156101a957600080fd5b8101908080359060200190929190505050610599565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561024757808201518184015260208101905061022c565b50505050905090810190601f1680156102745780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561029257600080fd5b5061029b6106a1565b6040518082815260200191505060405180910390f35b3480156102bd57600080fd5b506103a1600480360360608110156102d457600080fd5b81019080803590602001906401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184600183028401116401000000008311171561032557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106a7565b005b3480156103af57600080fd5b506103b8610818565b6040518082815260200191505060405180910390f35b6103d661081e565b005b3480156103e457600080fd5b50610411600480360360208110156103fb57600080fd5b8101908080359060200190929190505050610898565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461046d57600080fd5b600080828154811061047b57fe5b906000526020600020906005020190508060020160149054906101000a900460ff16156104a757600080fd5b6002600454816104b357fe5b048160030154116104c357600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610531573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60036020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081815481106105a657fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106525780601f1061062757610100808354040283529160200191610652565b820191906000526020600020905b81548152906001019060200180831161063557829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461070157600080fd5b6107096109d7565b6040518060a001604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000815250905060008190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820151816000019080519060200190610794929190610a1e565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff02191690831515021790555060808201518160030155505050505050565b60025481565b600254341161082c57600080fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008154809291906001019190505550565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108ee57600080fd5b60008082815481106108fc57fe5b906000526020600020906005020190508060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561096557600080fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600301600081548092919060010191905055505050565b6040518060a001604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a5f57805160ff1916838001178555610a8d565b82800160010185558215610a8d579182015b82811115610a8c578251825591602001919060010190610a71565b5b509050610a9a9190610a9e565b5090565b610ac091905b80821115610abc576000816000905550600101610aa4565b5090565b9056fea2646970667358221220c837d6a6e54b41ca6273313b337ebdb9742fd654a985982afdb248378961689b64736f6c634300060a0033a264697066735822122016e650f339bea3748e0e326c103ded20445b6603ef860ddc33786fd1d67fbed864736f6c634300060a0033";
const abi = [{
  "inputs": [{
    "internalType": "uint256",
    "name": "minimum",
    "type": "uint256"
  }],
  "name": "createCampaign",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "deployedCampaigns",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "getDeployedCampaign",
  "outputs": [{
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
  }],
  "stateMutability": "view",
  "type": "function"
}];
const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract(abi, '0x595edF6937Bd40CA2642de43eeB51c563B1DF325');
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OIDg");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CafY");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);








class CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  // This method works for nextjs for initial data loading. Its a static method.
  static async getInitialProps() {
    const campaigns = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].methods.getDeployedCampaign().call();
    return {
      campaigns
    };
  } // This method Works for create-react-app project for initial data loading
  // async componentDidMount(){}


  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          route: `/campaigns/${address}`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              circular: true,
              color: "blue",
              name: "sign-in"
            }), "View Campaign"]
          })
        }),
        fluid: true
      };
    });
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      items: items
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Campaigns"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          route: "/campaigns/new",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              floated: "right",
              content: "Create Campaign",
              icon: "add circle",
              labelPosition: "left",
              primary: true
            })
          })
        }), this.renderCampaigns()]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

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