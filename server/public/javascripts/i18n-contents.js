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
/******/ 	__webpack_require__.p = "/src/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_ko_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

i18next.init({
  lng: "ko",
  debug: true,
  resources: {
    ko: {
      translation: _locales_ko_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
  }
}).then(function () {
  var content = document.querySelectorAll("[i18n-content]");

  if (content) {
    content.forEach(function (node) {
      var key = node.getAttribute("i18n-content");
      node.innerHTML = i18next.t(key);
    });
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  APP_NAME: "\uD55C\uC591 \uCC57\uBD07",
  BOT_NAME: "\uD558\uC774\uB9AC\uC628 \uBD07",
  MENU_ALARM_TITLE: "\uC54C\uB78C",
  MENU_TITLE: "\uBA54\uB274",
  BOT_SETTING_TITLE: "\uD558\uC774\uB9AC\uC628 \uBD07 \uC124\uC815",
  MENU_BOT_SETTING: "\uBD07 \uCEE4\uC2A4\uD140 \uC124\uC815",
  MENU_CHAT_WINDOW: "\uCC44\uD305\uCC3D\uC73C\uB85C \uC774\uB3D9",
  CONVERT_RIVESCRIPT: "RiveScript\uB85C \uC804\uD658",
  NO_IMPLEMENT: "\uD604\uC7AC\uB294 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4.",
  SEND_MESSAGE: "\uC804\uC1A1",
  INPUT_BOOK_NAME: "\uD559\uC220\uC815\uBCF4\uAD00\uC5D0\uC11C \uAC80\uC0C9\uD574\uC904\uAC8C. <br/><strong>\uCC45 \uC774\uB984</strong>\uC744 \uC785\uB825\uD574\uC918",
  BUS_STOP_DORM: "\uAE30\uC219\uC0AC",
  BUS_STOP_SHUTTLE: "\uC154\uD2C0\uCF55",
  BUS_STOP_STATION: "\uD55C\uB300\uC55E\uC5ED",
  BUS_STOP_ARTIN: "\uC608\uC220\uC778"
});

/***/ })

/******/ });