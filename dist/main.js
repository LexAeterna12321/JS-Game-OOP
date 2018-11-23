/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Wallet */ \"./src/js/Wallet.js\");\n/* harmony import */ var _js_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Game */ \"./src/js/Game.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wallet */ \"./src/js/Wallet.js\");\n\r\n\r\nclass Game {\r\n  constructor(startMoney) {\r\n    this.wallet = new _Wallet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startMoney);\r\n  }\r\n  startGame() {\r\n    const startBtn = document.querySelector(\"button#start\");\r\n    startBtn.addEventListener(\"click\", () => {\r\n      this.wallet.checkCanPlay();\r\n    });\r\n  }\r\n  render() {\r\n    const walletSpan = document.querySelector(\"span.wallet\");\r\n    walletSpan.textContent = this.wallet.getValue();\r\n  }\r\n}\r\nconst game = new Game(200);\r\ngame.render();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Wallet.js":
/*!**************************!*\
  !*** ./src/js/Wallet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Wallet {\r\n  constructor(money) {\r\n    let _money = money;\r\n    this.getValue = function() {\r\n      return _money;\r\n    };\r\n    this.setMoney = function(value) {\r\n      _money = value;\r\n    };\r\n    this.checkCanPlay = function() {\r\n      const bet = document.querySelector(\"#bid\").value;\r\n      console.log(bet);\r\n      if (bet < _money) {\r\n        return console.log(\"możesz grać\");\r\n      } else throw console.error(\"za mało kasy\");\r\n    };\r\n  }\r\n}\r\nconst wal = new Wallet(100);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\r\n\n\n//# sourceURL=webpack:///./src/js/Wallet.js?");

/***/ })

/******/ });