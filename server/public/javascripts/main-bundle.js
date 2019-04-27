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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _chat_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _bot_setting_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: "init",
    value: function init() {
      this.loadingDOM();
      this.renderChatWindow();
    }
  }, {
    key: "loadingDOM",
    value: function loadingDOM() {
      var root = document.querySelector(".app-root");
      var loading = document.createElement("div");
      var FIVE = 5;
      this.emptyDOM();
      loading.classList.add("loading");

      for (var i = 0; i < FIVE; i++) {
        loading.appendChild(document.createElement("span"));
      }

      root.appendChild(loading);
    }
  }, {
    key: "renderChatWindow",
    value: function renderChatWindow() {
      this.emptyDOM();
      var chatWindow = document.createElement("chat-window");
      document.querySelector(".app-root").appendChild(chatWindow);
    }
  }, {
    key: "renderBotSettingWindow",
    value: function renderBotSettingWindow() {
      this.emptyDOM();
      var botSettingWIndow = document.createElement("bot-setting-window");
      document.querySelector(".app-root").appendChild(botSettingWIndow);
    }
  }, {
    key: "emptyDOM",
    value: function emptyDOM() {
      document.querySelector(".app-root").innerHTML = "";
    }
  }]);

  return Main;
}();


Main.init();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_chat_window_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_chat_window_body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _components_chat_window_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tposition: absolute;\t\t\n\t\ttop: 0;\n\t\tleft: 0;\t\t\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 80px 1fr 100px;\n\t}\n\n\tchat-window-header {\n\t\tbackground-color: #A9BDCE;\n\t}\n\n\tchat-window-footer {\n\t\tbackground-color: white;\t\t\n\t}\n\n\tchat-window-body {\n\t\tbackground-color: #B2C7D9;\n\t\toverflow: scroll;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<chat-window-header></chat-window-header>\n\t\t\t\t<chat-window-body></chat-window-body>\n\t\t\t\t<chat-window-footer></chat-window-footer>\t\t\t\t\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ChatWindow =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatWindow, _HTMLElement);

  function ChatWindow() {
    var _this;

    _classCallCheck(this, ChatWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatWindow).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    return _this;
  }

  _createClass(ChatWindow, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.scrollToLast();
    }
  }, {
    key: "scrollToLast",
    value: function scrollToLast() {
      var chatBody = this.shadowRoot.querySelector("chat-window-body");
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return ChatWindow;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("chat-window", ChatWindow);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return comitter.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (v != null &&
                    (Array.isArray(v) ||
                        // tslint:disable-next-line:no-any
                        typeof v !== 'string' && v[Symbol.iterator])) {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
                else {
                    text += typeof v === 'string' ? v : String(v);
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
class AttributePart {
    constructor(comitter) {
        this.value = undefined;
        this.committer = comitter;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
class NodePart {
    constructor(options) {
        this.value = undefined;
        this._pendingValue = undefined;
        this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this._pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this._commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this._commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this._commitNode(value);
        }
        else if (Array.isArray(value) ||
            // tslint:disable-next-line:no-any
            value[Symbol.iterator]) {
            this._commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this._insert(value);
        this.value = value;
    }
    _commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = value;
        }
        else {
            this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }
        this.value = value;
    }
    _commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this._commitNode(fragment);
            this.value = instance;
        }
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this._pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this._pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
        }
        this.value = value;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this._pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this._boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this._pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        if (shouldAddListener) {
            this._options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        this.value = newListener;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    let node = start;
    while (node !== end) {
        const n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
const removeNodes = (container, startNode, endNode = null) => {
    let node = startNode;
    while (node !== endNode) {
        const n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this._parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this._parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // When using the Custom Elements polyfill, clone the node, rather than
        // importing it, to keep the fragment in the template's document. This
        // leaves the fragment inert so custom elements won't upgrade and
        // potentially modify their contents by creating a polyfilled ShadowRoot
        // while we traverse the tree.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const parts = this.template.parts;
        let partIndex = 0;
        let nodeIndex = 0;
        const _prepareInstance = (fragment) => {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length && node !== null) {
                const part = parts[partIndex];
                // Consecutive Parts may have the same node index, in the case of
                // multiple bound attributes on an element. So each iteration we either
                // increment the nodeIndex, if we aren't on a node with a part, or the
                // partIndex if we are. By not incrementing the nodeIndex when we find a
                // part, we allow for the next part to be associated with the current
                // node if neccessasry.
                if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                    this._parts.push(undefined);
                    partIndex++;
                }
                else if (nodeIndex === part.index) {
                    if (part.type === 'node') {
                        const part = this.processor.handleTextExpression(this.options);
                        part.insertAfterNode(node.previousSibling);
                        this._parts.push(part);
                    }
                    else {
                        this._parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                    }
                    partIndex++;
                }
                else {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        _prepareInstance(node.content);
                    }
                    node = walker.nextNode();
                }
            }
        };
        _prepareInstance(fragment);
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        let index = -1;
        let partIndex = 0;
        const nodesToRemove = [];
        const _prepareTemplate = (template) => {
            const content = template.content;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            while (walker.nextNode()) {
                index++;
                const node = walker.currentNode;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondance between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < attributes.length; i++) {
                            if (attributes[i].value.indexOf(marker) >= 0) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = result.strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            const strings = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings });
                            node.removeAttribute(attributeLookupName);
                            partIndex += strings.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        _prepareTemplate(node);
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            parent.insertBefore((strings[i] === '') ? createMarker() :
                                document.createTextNode(strings[i]), node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !==
                            -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                        }
                    }
                }
            }
        };
        _prepareTemplate(element);
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const endIndex = this.strings.length - 1;
        let html = '';
        for (let i = 0; i < endIndex; i++) {
            const s = this.strings[i];
            // This exec() call does two things:
            // 1) Appends a suffix to the bound attribute name to opt out of special
            // attribute value parsing that IE11 and Edge do, like for style and
            // many SVG attributes. The Template class also appends the same suffix
            // when looking up attributes to create Parts.
            // 2) Adds an unquoted-attribute-safe marker for the first expression in
            // an attribute. Subsequent attribute expressions will use node markers,
            // and this is safe since attributes with multiple expressions are
            // guaranteed to be quoted.
            const match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (match) {
                // We're starting a new bound attribute.
                // Add the safe attribute suffix, and use unquoted-attribute-safe
                // marker.
                html += s.substr(0, match.index) + match[1] + match[2] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + match[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
            else {
                // We're either in a bound node, or trailing bound attribute.
                // Either way, nodeMarker is safe to use.
                html += s + _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"];
            }
        }
        return html + this.strings[endIndex];
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _chat_window_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\t* {\n\t\tuser-select: none;\n\t}\n\n\tmain {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbox-sizing: border-box;\t\t\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 80px 1fr 100px;\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t.bot-profile {\n\t\tposition: relative;\n\t\tpadding: 15px;\n\t}\n\t\n\t.bot-profile-img {\n\t\tposition: absolute;\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 25px;\n\t\tbackground-image: url('/images/hi-lion.png');\n\t\tbackground-repeat: no-repeat;\n    \tbackground-position: center;\n    \tbackground-size: contain;\n\t}\n\n\t.name-submenu {\n\t\tdisplay:grid;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\n\t.name {\n\t\tpadding-top: 20px;\n\t\tfont-size: 12px;\n\t\tfont-weight: bold;\n\t\tcolor: #4A4C4E;\n\t}\n\n\t.submenu > button {\n\t\tvertical-align: middle;\t\n\t\tpadding-left: 2px;\n\t\tcursor: pointer;\n\t\tborder: 0;\n\t\tbackground-color: transparent;\n\t\tpadding: 10px;\n\t}\n\n\t.submenu > button:first-child {\n\t\tpadding-left: 0;\n\t}\n\n\t.submenu-search svg {\n\t\tcolor: #65717C;\n\t}\n\n\t.submenu svg:hover, .menu svg:hover {\n\t\tcolor: black;\n\t}\n\n\t.menu {\n\t\ttext-align: center;\n\t}\n\n\t.menu > * {\n\t\tvertical-align: middle;\t\n\t\tcursor: pointer;\t\t\n\t\tposition:relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\t\t\n\t}\n\n\t.menu-alarm:not(.on) {\n\t\tleft: -4px;\n\t}\n\n\t.menu-alarm svg {\n\t\tcolor: #65717C;\n\t}\n\n\t.menu-alarm, .menu-button {\n\t\tvertical-align: middle;\t\t\t\t\n\t\tposition:relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tz-index: 20;\n\t\tborder: 0;\n\t\tbackground-color: transparent;\n\t\tpadding: 0;\n\t}\n\n\t.menu-button > svg {\n\t\tcolor: #65717C;\n\t\tcursor: pointer;\n\t}\n\n\tchat-window-menu {\n\t\tdisplay: none;\t\t\t\n\t\tposition: absolute;\n\t\ttop: 24px;\n\t\tright: -10px;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<div class='bot-profile'>\n\t\t\t\t\t<span class='bot-profile-img'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='name-submenu'>\n\t\t\t\t\t<div class='name'>", "</div>\n\t\t\t\t\t<div class='submenu'>\n\t\t\t\t\t\t<button class='submenu-search'>\n\t\t\t\t\t\t\t<svg height='14' width='14' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"search\" class=\"svg-inline--fa fa-search fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"></path></svg>\n\t\t\t\t\t\t</button>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='menu'>\n\t\t\t\t\t<button class='menu-alarm on' title='", "'>\n\t\t\t\t\t\t<svg height='20' width='32' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"bell\" class=\"svg-inline--fa fa-bell fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z\"></path></svg>\n\t\t\t\t\t</button>\t\t\t\t\t\n\t\t\t\t\t<button class='menu-button' title='", "'>\n\t\t\t\t\t\t<svg height='20' width='32' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"bars\" class=\"svg-inline--fa fa-bars fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z\"></path></svg>\n\t\t\t\t\t\t<chat-window-menu></chat-window-menu>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ChatWindowHeader =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatWindowHeader, _HTMLElement);

  function ChatWindowHeader() {
    var _this;

    _classCallCheck(this, ChatWindowHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatWindowHeader).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.eventClickAlarm = _this.onClickAlarm.bind(_assertThisInitialized(_this));
    _this.eventClickMenu = _this.onClickMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChatWindowHeader, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector(".submenu-search").addEventListener("click", this.onClickSubmenuSearch, true);
      this.shadowRoot.querySelector(".menu-button").addEventListener("click", this.eventClickMenu, true);
      this.shadowRoot.querySelector(".menu-alarm").addEventListener("click", this.eventClickAlarm, true);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector(".submenu-search").removeEventListener("click", this.onClickSubmenuSearch, true);
      this.shadowRoot.querySelector(".menu-button").removeEventListener("click", this.eventClickMenu, true);
      this.shadowRoot.querySelector(".menu-alarm").removeEventListener("click", this.eventClickAlarm, true);
    }
  }, {
    key: "onClickSubmenuPicture",
    value: function onClickSubmenuPicture() {
      alert(i18next.t("NO_IMPLEMENT"));
    }
  }, {
    key: "onClickSubmenuSearch",
    value: function onClickSubmenuSearch() {
      alert(i18next.t("NO_IMPLEMENT"));
    }
  }, {
    key: "onClickMenu",
    value: function onClickMenu() {
      var chatMenu = this.shadowRoot.querySelector("chat-window-menu");

      if (chatMenu.menuState === "hide") {
        chatMenu.show();
      } else {
        chatMenu.hide();
      }
    }
  }, {
    key: "onClickAlarm",
    value: function onClickAlarm() {
      this.toggleAlarmIcon();
    }
  }, {
    key: "toggleAlarmIcon",
    value: function toggleAlarmIcon() {
      var alarmButton = this.shadowRoot.querySelector(".menu-alarm");

      if (alarmButton.classList.contains("on")) {
        alarmButton.classList.remove("on");
        alarmButton.innerHTML = "\n\t\t\t<svg height='20' width='32' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"bell\" class=\"svg-inline--fa fa-bell fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z\"></path></svg>\n\t\t\t";
        return;
      }

      alarmButton.classList.add("on");
      alarmButton.innerHTML = "\n\t\t<svg height='20' width='32' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"bell\" class=\"svg-inline--fa fa-bell fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z\"></path></svg>\n\t\t";
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("BOT_NAME"), i18next.t("MENU_ALARM_TITLE"), i18next.t("MENU_TITLE"));
    }
  }]);

  return ChatWindowHeader;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("chat-window-header", ChatWindowHeader);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\t.menu::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -57px;\n\t\tright: -5px;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tz-index: -1;\n\t}\n\n\t.menu {\n\t\tbackground-color: white;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: max-content;\n\t\tlist-style: none;\n\t\tborder-radius: 2px;\n\t}\n\n\t.menu li {\n\t\tpadding: 10px 15px 10px 15px;\n\t\tmargin: 0 1px 0 1px;\n\t\tbox-sizing: border-box;\n\t\tmax-width: 200px;\n\t\tfont-size: 12px;\n\t\ttext-align: left;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t.menu li:not(:last-child) {\n\t\tborder-bottom: 1px solid #F0F0F0;\n\t}\n\n\t.menu li:hover {\n\t\tbackground-color: #F0F0F0;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<ul class='menu'>\n\t\t\t\t<li class='bot-setting' title='", "'>", "</li>\n\t\t\t</ul>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ChatWindowMenu =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatWindowMenu, _HTMLElement);

  function ChatWindowMenu() {
    var _this;

    _classCallCheck(this, ChatWindowMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatWindowMenu).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.menuState = "hide";
    _this.eventClickBotSetting = _this.onClickBotSetting.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChatWindowMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.querySelector(".menu .bot-setting").addEventListener("click", this.eventClickBotSetting);
      this.shadowRoot.querySelector(".menu").addEventListener("click", function (event) {
        return _this2.onClickOutOfMenu(event);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector(".menu .bot-setting").removeEventListener("click", this.eventClickBotSetting);
    }
  }, {
    key: "onClickOutOfMenu",
    value: function onClickOutOfMenu(event) {
      if (event.target.classList.contains("menu")) {
        this.hide();
      }
    }
  }, {
    key: "onClickBotSetting",
    value: function onClickBotSetting() {
      this.hide();
      this.openBotSetting();
    }
  }, {
    key: "openBotSetting",
    value: function openBotSetting() {
      _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadingDOM();
      _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderBotSettingWindow();
    }
  }, {
    key: "show",
    value: function show() {
      this.style.display = "block";
      this.menuState = "show";
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style.display = "none";
      this.menuState = "hide";
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("MENU_BOT_SETTING"), i18next.t("MENU_BOT_SETTING"));
    }
  }]);

  return ChatWindowMenu;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("chat-window-menu", ChatWindowMenu);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _bot_chat_balloon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _my_chat_balloon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _book_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _bus_info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-auto-rows: min-content;\n\t\twidth: 100%;\n\t\theight: 100%;\t\t\n\t}\n\n\tbot-chat-balloon, my-chat-balloon {\n\t\twidth: 100%;\n\t\tmin-height: min-content;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\t\t\t\t\n\t\t\t\t<!-- <my-chat-balloon></my-chat-balloon>\n\t\t\t\t<bot-chat-balloon></bot-chat-balloon> -->\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ChatWindowBody =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatWindowBody, _HTMLElement);

  function ChatWindowBody() {
    var _this;

    _classCallCheck(this, ChatWindowBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatWindowBody).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    return _this;
  }

  _createClass(ChatWindowBody, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.chatWindow = document.querySelector("chat-window");
      this.bot = new RiveScript(); // 라이브 스크립트 테스트 코드
      // this.bot.loadFile(`/assets/hy-lion.rive`).then(this.loading_done.bind(this)).catch(this.loading_error)
    }
  }, {
    key: "loading_done",
    value: function loading_done() {
      var _this2 = this;

      var username = "hy-lion";
      var sendText = "hello";
      this.bot.sortReplies();
      this.send(sendText);
      this.bot.reply(username, sendText).then(function (reply) {
        _this2.reply(reply);
      });
    }
  }, {
    key: "loading_error",
    value: function loading_error(error) {
      throw new Error("Error when loading files: ".concat(error));
    }
  }, {
    key: "reply",
    value: function reply(text) {
      var main = this.shadowRoot.querySelector("main");
      var ONE = 1,
          LAST_CHILD_NUM = main.children.length - ONE;
      var lastChat = main.children[LAST_CHILD_NUM];
      var isBot = main.children.length && main.children[LAST_CHILD_NUM].localName === "bot-chat-balloon";

      if (isBot == false) {
        var botChatBalloon = document.createElement("bot-chat-balloon");
        main.appendChild(botChatBalloon);
        botChatBalloon.chat(text);
        this.chatWindow.scrollToLast();
        return;
      }

      lastChat.chat(text);
      this.chatWindow.scrollToLast();
    }
  }, {
    key: "send",
    value: function send(text) {
      var main = this.shadowRoot.querySelector("main");
      var ONE = 1,
          LAST_CHILD_NUM = main.children.length - ONE;
      var lastChat = main.children[LAST_CHILD_NUM];
      var isMe = main.children.length && main.children[LAST_CHILD_NUM].localName === "my-chat-balloon";

      if (isMe == false) {
        var myChatBalloon = document.createElement("my-chat-balloon");
        main.appendChild(myChatBalloon);
        myChatBalloon.chat(text);
        this.chatWindow.scrollToLast();
        return;
      }

      lastChat.chat(text);
      this.chatWindow.scrollToLast();
    }
  }, {
    key: "waitSend",
    value: function waitSend(callback) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation["addedNodes"][0]["localName"] === "my-chat-balloon") {
            callback(mutation["addedNodes"][0].shadowRoot.querySelector(".chat-content").textContent);
          }

          observer.disconnect();
        });
      });
      var config = {
        childList: true,
        subtree:  true || false
      };
      observer.observe(this.shadowRoot, config);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return ChatWindowBody;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("chat-window-body", ChatWindowBody);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: min-content 1fr;\n\t\tgrid-template-rows: min-content 1fr;\n\t\tgrid-template-areas: \n\t\t\t\"a b\"\n\t\t\t\"a c\";\n\t\tmin-height: 70px;\n\t}\t\n\n\t.profile {\n\t\tpadding: 15px 10px 15px 15px;\n\t\tgrid-area: a;\n\t\tz-index: 10;\n\t}\n\n\t.profile-img {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tborder-radius: 25px;\n\t\tbackground-image: url('/images/hi-lion.png');\n\t\tbackground-repeat: no-repeat;\n    \tbackground-position: center;\n    \tbackground-size: contain;\n\t}\n\t\n\t.name {\n\t\tgrid-area: b;\n\t\tfont-size: 12px;\n\t\tcolor: #4A4C4E;\n\t\tpadding-top: 12px;\n\t}\n\n\t.chat-wrap {\n\t\tgrid-area: c;\n\t\tpadding-top: 5px;\n\t\tpadding-bottom: 5px;\n\t\tz-index: 5;\n\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-row-gap: 5px;\n\t}\n\n\t.chat-content, .chat-content-continue {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\tmin-height: 28px;\n\t\tmin-width: 20px;\n\t\twidth: fit-content;\n\t\tmax-width: calc(80vw - 65px);\n\t\tbackground: white;\n\t\tborder-radius: 5px;\n\t\tpadding: 5px 10px 5px 10px;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 13px;\n\t\tcolor: #4A4C4E;\n\t}\n\n\t.chat-content:before {\n\t\tleft: -10px;\n\t\ttop: 5px;\n\t\tcontent: \" \";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tposition: absolute;\n\t\tpointer-events: none;\n\t\tborder-radius: 25px;\n\t\tbackground: white;\n\t\tz-index: -1;\n\t}\n\n\t.chat-content:after {\n\t\tleft: -15px;\n\t\ttop: 0px;\n\t\tcontent: \" \";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tposition: absolute;\n\t\tpointer-events: none;\n\t\tborder-radius: 25px;\n\t\tbackground: #B2C7D9;\n\t\tz-index: -1;\n\t}\t\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<div class='profile'>\n\t\t\t\t\t<div class='profile-img'></div>\n\t\t\t\t</div>\n\t\t\t\t<div class='name'>", "</div>\n\t\t\t\t<div class='chat-wrap'>\n\t\t\t\t\t<!-- <div class='chat-content'></div> -->\n\t\t\t\t\t<!-- <div class='chat-content-continue'></div> -->\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BotChatBalloon =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BotChatBalloon, _HTMLElement);

  function BotChatBalloon() {
    var _this;

    _classCallCheck(this, BotChatBalloon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BotChatBalloon).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.chatWindow = document.querySelector("chat-window");
    return _this;
  }

  _createClass(BotChatBalloon, [{
    key: "chat",
    value: function chat(text) {
      var NO_CHAT = 0;
      var isNoChat = this.shadowRoot.querySelector(".chat-wrap").childElementCount === NO_CHAT;

      if (isNoChat) {
        this.newChat(text);
        return;
      }

      this.continueChat(text);
    }
  }, {
    key: "newChat",
    value: function newChat(text) {
      var div = document.createElement("div");
      div.classList.add("chat-content");
      div.innerHTML = text;
      this.shadowRoot.querySelector(".chat-wrap").appendChild(div);
    }
  }, {
    key: "continueChat",
    value: function continueChat(text) {
      var div = document.createElement("div");
      div.classList.add("chat-content-continue");
      div.innerHTML = text;
      this.shadowRoot.querySelector(".chat-wrap").appendChild(div);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("BOT_NAME"));
    }
  }]);

  return BotChatBalloon;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("bot-chat-balloon", BotChatBalloon);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\twidth: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-template-columns: 1fr;\n\t\tmin-height: 30px;\n\t\tbox-sizing: border-box;\n\t\tfloat: right;\n\t}\t\n\n\t.chat-wrap {\n\t\tpadding-top: 5px;\n\t\tpadding-bottom: 5px;\n\t\tz-index: 5;\n\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-row-gap: 5px;\n\t}\n\n\t.chat-content, .chat-content-continue {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\tmin-height: 28px;\n\t\tmin-width: 20px;\n\t\twidth: fit-content;\n\t\tmax-width: calc(80vw - 65px);\n\t\tbackground: #FFEB33;\n\t\tborder-radius: 5px;\n\t\tpadding: 5px 10px 5px 10px;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 13px;\n\t\tcolor: #4A4C4E;\n\t\tmargin-right: 20px;\n\t\tmargin-left: auto;\n\t}\n\n\t.chat-content:before {\n\t\tright: -10px;\n\t\ttop: 5px;\n\t\tcontent: \" \";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tposition: absolute;\n\t\tpointer-events: none;\n\t\tborder-radius: 25px;\n\t\tbackground: #FFEB33;\n\t\tz-index: -1;\n\t}\n\n\t.chat-content:after {\n\t\tright: -15px;\n\t\ttop: 0px;\n\t\tcontent: \" \";\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tposition: absolute;\n\t\tpointer-events: none;\n\t\tborder-radius: 25px;\n\t\tbackground: #B2C7D9;\n\t\tz-index: -1;\n\t}\t\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<div class='chat-wrap'>\n\t\t\t\t\t<!-- <div class='chat-content'></div> -->\n\t\t\t\t\t<!-- <div class='chat-content-continue'></div> -->\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MyChatBalloon =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MyChatBalloon, _HTMLElement);

  function MyChatBalloon() {
    var _this;

    _classCallCheck(this, MyChatBalloon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyChatBalloon).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    return _this;
  }

  _createClass(MyChatBalloon, [{
    key: "chat",
    value: function chat(text) {
      var NO_CHAT = 0;
      var isNoChat = this.shadowRoot.querySelector(".chat-wrap").childElementCount === NO_CHAT;

      if (isNoChat) {
        this.newChat(text);
        return;
      }

      this.continueChat(text);
    }
  }, {
    key: "newChat",
    value: function newChat(text) {
      var div = document.createElement("div");
      div.classList.add("chat-content");
      div.innerHTML = text;
      this.shadowRoot.querySelector(".chat-wrap").appendChild(div);
    }
  }, {
    key: "continueChat",
    value: function continueChat(text) {
      var div = document.createElement("div");
      div.classList.add("chat-content-continue");
      div.innerHTML = text;
      this.shadowRoot.querySelector(".chat-wrap").appendChild(div);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return MyChatBalloon;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("my-chat-balloon", MyChatBalloon);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, auto);\n\t\tmax-width: 80vw;\n\t\theight: 120px;\n\t\toverflow: hidden;\n\t}\n\n\t.book-image {\n\t\twidth: 80px;\n\t\theight: 120px;\n\t}\n\n\t.info {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: repeat(4, auto);\n\t\theight: 120px;\n\t\tpadding-left: 5px;\n\t}\n\n\t.title {\n\t\tcolor: #0072bc;\n\t\tfont-weight: bold;\n\t\ttext-overflow: ellipsis;\t\t\n\t}\n\n\t.isCheckout {\n\t\tfont-weight: bold;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<div class='image-wrap'><img class='book-image' src='' /></div>\n\t\t\t\t<div class='info'>\n\t\t\t\t\t<div class='title'></div>\n\t\t\t\t\t<div class='author'></div>\n\t\t\t\t\t<div class='publication'></div>\n\t\t\t\t\t<div class='isCheckout'></div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BookList =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BookList, _HTMLElement);

  function BookList() {
    var _this;

    _classCallCheck(this, BookList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookList).call(this));
    _this.imageSrc = _this.getAttribute("imageSrc");
    _this.title = _this.getAttribute("title");
    _this.author = _this.getAttribute("author");
    _this.publication = _this.getAttribute("publication");
    _this.isCheckout = _this.getAttribute("isCheckout");

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.chatWindow = document.querySelector("chat-window");
    return _this;
  }

  _createClass(BookList, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector(".book-image").src = this.imageSrc;
      this.shadowRoot.querySelector(".title").textContent = this.title;
      this.shadowRoot.querySelector(".author").textContent = this.author;
      this.shadowRoot.querySelector(".publication").textContent = this.publication;

      if (this.isCheckout === "\uB300\uCD9C\uAC00\uB2A5") {
        this.shadowRoot.querySelector(".isCheckout").style.color = "green";
      } else if (this.isCheckout === "\uB300\uCD9C\uC911") {
        this.shadowRoot.querySelector(".isCheckout").style.color = "red";
      }

      this.shadowRoot.querySelector(".isCheckout").textContent = this.isCheckout;
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return BookList;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("book-list", BookList);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: repeat(5, auto);\n\t\tmax-width: 80vw;\n\t\twidth: 200px;\n\t\toverflow: hidden;\n\t}\n\n\t.bus-stop {\n\t\tdisplay: flex;\n\t\theight: 80px;\n\t}\n\n\t.bus-stop:not(:last-child) {\n\t\tborder-bottom: 1px solid hsla(0, 0%, 60%, 0.2);\t\t\n\t}\n\n\t.bus-stop-name {\n\t\talign-self: center;\n\t\tcolor: dodgerblue;\n\t\tfont-weight: bold;\n\t\tposition: absolute;\n\t\tright: 7px;\n\t\twidth: 60px;\n\t\ttext-align: left;\n\t}\n\n\t.bus-time-wrap {\n\t\tdisplay: flex;\n\t\tflex-flow: column;\n\t\ttext-align: right;\n\t\tjustify-content: center;\n\t\tposition: absolute;\n\t\theight: 80px;\n\t\tright: 52px;\n\t\twidth: 165px;\n\t\toverflow: hidden;\n\t}\n\n\t.bus-time {\n\t\tcolor: hsl(217, 20%, 56%);\n\t\ttext-align: center;\n\t\tposition: relative;\n\t\tbackground: white;\n\t\tborder: 0px solid hsl(217, 20%, 56%);\n\t\tmargin: 2px;\n\t\twidth: 105px;\n\t\tborder-radius: 5px;\n\t}\n\n\t.bus-time:after, .bus-time:before {\n\t\tleft: 100%;\n\t\ttop: 50%;\n\t\tborder: solid transparent;\t\t\n\t\tcontent: \" \";\n\t\theight: 0;\n\t\twidth: 0;\n\t\tposition: absolute;\n\t\tpointer-events: none;\n\t}\n\n\t.bus-time:after {\n\t\tborder-color: rgba(136, 183, 213, 0);\n\t\tborder-left-color: white;\n\t\tborder-width: 3px;\n\t\tmargin-top: -3px;\n\t}\n\n\t.bus-time:before {\n\t\tborder-color: rgba(194, 225, 245, 0);\n\t\tborder-left-color: hsl(217, 20%, 56%);\n\t\tborder-width: 5px;\n\t\tmargin-top: -5px;\n\t}\n\n\t.bus-arrow {\n\t\tuser-select: none;\n\t\tright: 76px;\n\t\tposition: absolute;\n\t\talign-self: center;\n\t\tborder: 1px solid #FB7100;\n\t\theight: 15px;\n\t\tborder-radius: 100%;\n\t\tcolor: #FB7100;\n\t\tbackground-color: white;\n\t\tz-index: 10;\t\t\n\t}\n\n\t.bus-arrow-pillar {\n\t\tposition: absolute;\n\t\ttop: 40px;\n\t\theight: 330px;\n\t\tbackground: #FB7100;\n\t\twidth: 3px;\n\t\tright: 82px;\n\t\tz-index: 5;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<span class='bus-arrow-pillar'></span>\n\t\t\t\t<div class='bus-stop'>\n\t\t\t\t\t<span class='bus-stop-name'>", "</span>\n\t\t\t\t\t<span class='bus-time-wrap'>\n\t\t\t\t\t\t<div class='bus-time'>\uC21C\u3000\uD658 01:00</div>\n\t\t\t\t\t\t<div class='bus-time'>\uD55C\uB300\uC55E 03:02</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class='bus-arrow'>\u25BC</span>\n\t\t\t\t</div>\n\t\t\t\t<div class='bus-stop'>\n\t\t\t\t\t<span class='bus-stop-name'>", "</span>\n\t\t\t\t\t<span class='bus-time-wrap'>\n\t\t\t\t\t\t<div class='bus-time'>\uC21C\u3000\uD658 01:00</div>\n\t\t\t\t\t\t<div class='bus-time'>\uD55C\uB300\uC55E 03:02</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class='bus-arrow'>\u25BC</span>\n\t\t\t\t</div>\n\t\t\t\t<div class='bus-stop'>\n\t\t\t\t\t<span class='bus-stop-name'>", "</span>\n\t\t\t\t\t<span class='bus-time-wrap'>\n\t\t\t\t\t\t<div class='bus-time'>\uC21C\u3000\uD658 01:00</div>\n\t\t\t\t\t\t<div class='bus-time'>\uD55C\uB300\uC55E 03:02</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class='bus-arrow'>\u25BC</span>\n\t\t\t\t</div>\n\t\t\t\t<div class='bus-stop'>\n\t\t\t\t\t<span class='bus-stop-name'>", "</span>\n\t\t\t\t\t<span class='bus-time-wrap'>\n\t\t\t\t\t\t<div class='bus-time'>\uC21C\u3000\uD658 01:00</div>\n\t\t\t\t\t\t<div class='bus-time'>\uD55C\uB300\uC55E 03:02</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class='bus-arrow'>\u25BC</span>\n\t\t\t\t</div>\n\t\t\t\t<div class='bus-stop'>\n\t\t\t\t\t<span class='bus-stop-name'>", "</span>\n\t\t\t\t\t<span class='bus-time-wrap'>\n\t\t\t\t\t\t<div class='bus-time'>\uC21C\u3000\uD658 01:00</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class='bus-arrow'>\u25BC</span>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BusInfo =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BusInfo, _HTMLElement);

  function BusInfo() {
    var _this;

    _classCallCheck(this, BusInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BusInfo).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    return _this;
  }

  _createClass(BusInfo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.syncBusArriveTime();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "syncBusArriveTime",
    value: function syncBusArriveTime() {
      var xhr = new XMLHttpRequest();
      var COMPLETED = 4,
          OK = 200;

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("POST", "http://34.80.42.161:8080/http://34.80.42.161:8000/v1/chat");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "origin");
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === COMPLETED) {
          if (xhr.status === OK) {
            console.log(xhr.responseText);
          }
        }
      });
      xhr.send("{chat: '\uBC84\uC2A4 \uC5B8\uC81C\uC640'}");
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("BUS_STOP_DORM"), i18next.t("BUS_STOP_SHUTTLE"), i18next.t("BUS_STOP_STATION"), i18next.t("BUS_STOP_ARTIN"), i18next.t("BUS_STOP_DORM"));
    }
  }]);

  return BusInfo;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("bus-info", BusInfo);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _modules_search_library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _modules_search_food_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 70px;\n\t\tgrid-template-rows: 1fr;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.send_text {\n\t\tborder: 0;\n\t\tresize: none;\n\t\tmargin: 10px;\n\t\tfont-size: 14px;\n\t}\n\n\t.send_text:focus {\n\t\toutline: none;\n\t}\n\n\t.send_button {\n\t\tbackground-color: #FFEC42;\n\t\tborder: 0.5px solid #DFCE3D;\n\t\tbox-sizing: border-box;\n\t\tpadding-top: 5px;\n\t\tpadding-bottom: 5px;\n\t\twidth: 50px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tborder-radius: 2px;\n\t\tfont-size: 12px;\n\t\tposition: relative;\n\t\ttop: 10%;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tcolor: rgba(0, 0, 0, 0.4);\n\t}\n\n\t.send_button:hover {\n\t\tbackground-color: #F5E340;\n\t\tcolor: rgba(0, 0, 0, 0.8);\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<textarea class='send_text'></textarea>\n\t\t\t\t<div class='send_button_wrap'>\n\t\t\t\t\t<button class='send_button' type='button'>", "</button>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ChatWindowFooter =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatWindowFooter, _HTMLElement);

  function ChatWindowFooter() {
    var _this;

    _classCallCheck(this, ChatWindowFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatWindowFooter).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.eventKeydownTextarea = _this.onkeydownTextarea.bind(_assertThisInitialized(_this));
    _this.eventClickSendButton = _this.onClickSendButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ChatWindowFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector(".send_text").addEventListener("keypress", this.eventKeydownTextarea);
      this.shadowRoot.querySelector(".send_button").addEventListener("click", this.eventClickSendButton);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector(".send_text").removeEventListener("keypress", this.eventKeydownTextarea);
      this.shadowRoot.querySelector(".send_button").removeEventListener("click", this.eventClickSendButton);
    }
  }, {
    key: "onkeydownTextarea",
    value: function onkeydownTextarea(event) {
      var isEnter = event.code === "Enter";

      if (isEnter) {
        event.preventDefault();
        this.sendAndReply();
      }
    }
  }, {
    key: "onClickSendButton",
    value: function onClickSendButton() {
      this.sendAndReply();
    }
  }, {
    key: "sendAndReply",
    value: function sendAndReply() {
      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      var sendText = this.shadowRoot.querySelector(".send_text");
      chatBody.send(sendText.value);
      this.replyAboutCategory(sendText.value);
      _modules_search_library_js__WEBPACK_IMPORTED_MODULE_1__["default"].replyAboutLibrary(sendText.value);
      _modules_search_food_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].openHanyangSite(); // this.replyByPingpongAPI(sendText.value)

      sendText.value = "";
    }
  }, {
    key: "replyAboutLibrary",
    value: function replyAboutLibrary(text) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("POST", "http://aiopen.etri.re.kr:8000/Demo/WiseQAnal");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        return _this2.onCompletedSearchBook(xhr);
      });
      xhr.send("{\"request_id\": \"reserved field\",\"argument\": {\"text\": \"".concat(text, "\"}}"));
      return this;
    }
  }, {
    key: "onCompletedSearchBook",
    value: function onCompletedSearchBook(xhr) {
      var _this3 = this;

      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      var COMPLETED = 4,
          OK = 200;

      if (xhr.readyState === COMPLETED) {
        if (xhr.status === OK) {
          if (isTopicBook()) {
            chatBody.reply(i18next.t("INPUT_BOOK_NAME"));
            chatBody.waitSend(function (data) {
              _this3.searchBook(data);
            });
          }
        } else {
          throw new Error("No XHR");
        }
      }

      function isTopicBook() {
        var condition = JSON.parse(xhr.responseText)["return_object"]["orgQInfo"]["orgQUnit"]["vSATs"][0]["strSAT"];

        if (JSON.parse(xhr.responseText)["return_object"]["orgQInfo"]["orgQUnit"]["vSATs"][0]) {
          return condition === "AFW_DOCUMENT" || condition === "OGG_LIBRARY";
        }

        return false;
      }
    } // 책 이름 그대로 검색 받으면, 검색 해줌

  }, {
    key: "searchBook",
    value: function searchBook(text) {
      var _this4 = this;

      var xhr = new XMLHttpRequest();

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("GET", "https://lib.hanyang.ac.kr/pyxis-api/2/collections/6/search?all=k%7Ca%7C".concat(text, "&rq=BRANCH%3D9"));
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        return _this4.onReadyBookSearch(xhr);
      });
      xhr.send();
    }
  }, {
    key: "onReadyBookSearch",
    value: function onReadyBookSearch(xhr) {
      var COMPLETED = 4,
          OK = 200;
      var title, author, publication, imageSrc, isCheckout;

      if (xhr.readyState === COMPLETED) {
        if (xhr.status === OK) {
          // console.log(JSON.parse(xhr.responseText)[`data`][`list`])
          for (var i = 0; i < 3; i++) {
            title = JSON.parse(xhr.responseText)["data"]["list"][i]["titleStatement"];
            author = JSON.parse(xhr.responseText)["data"]["list"][i]["author"];
            publication = JSON.parse(xhr.responseText)["data"]["list"][i]["publication"];
            imageSrc = JSON.parse(xhr.responseText)["data"]["list"][i]["thumbnailUrl"];
            isCheckout = JSON.parse(xhr.responseText)["data"]["list"][i]["branchVolumes"].find(function (each) {
              return each.name === "ERICA\uD559\uC220\uC815\uBCF4\uAD00";
            })["cState"]; // console.log(title, author, publication, imageSrc, isCheckout)							

            this.createBookList({
              title: title,
              author: author,
              publication: publication,
              imageSrc: imageSrc,
              isCheckout: isCheckout
            });
          }
        } else {
          throw new Error("No XHR");
        }
      }
    }
  }, {
    key: "createBookList",
    value: function createBookList(bookInfo) {
      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      chatBody.reply("<book-list \n\t\t\timageSrc='".concat(bookInfo.imageSrc, "' \n\t\t\ttitle='").concat(bookInfo.title, "' \n\t\t\tauthor='").concat(bookInfo.author, "' \n\t\t\tpublication='").concat(bookInfo.publication, "' \n\t\t\tisCheckout='").concat(bookInfo.isCheckout, "' ></book-list>"));
    }
  }, {
    key: "replyAboutCategory",
    value: function replyAboutCategory(text) {
      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      var xhr = new XMLHttpRequest();
      var COMPLETED = 4,
          OK = 200;

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("GET", "http://localhost:8080/http://34.80.42.161:8000/api/?chat=".concat(encodeURIComponent(text)));
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === COMPLETED) {
          if (xhr.status === OK) {
            chatBody.reply("\uCE74\uD14C\uACE0\uB9AC: ".concat(xhr.responseText));
          }
        }
      });
      xhr.send();
      return this;
    }
  }, {
    key: "replyByPingpongAPI",
    value: function replyByPingpongAPI(text) {
      var xhr = new XMLHttpRequest();
      var COMPLETED = 4,
          OK = 200,
          FIRST_TEXT = 0;
      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("GET", "http://localhost:8080/https://pingpong.us/api/reaction.php?custom=basic&query=".concat(encodeURIComponent(text)));
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === COMPLETED) {
          if (xhr.status === OK) {
            var data = JSON.parse(xhr.responseText);
            var RAND = Math.floor(Math.random() * data.length);
            var speack = data[RAND]["message"].split("(")[FIRST_TEXT];
            chatBody.reply(speack);
          } else {
            throw new Error("No XHR");
          }
        }
      });
      xhr.send();
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("SEND_MESSAGE"));
    }
  }]);

  return ChatWindowFooter;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("chat-window-footer", ChatWindowFooter);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchLibrary =
/*#__PURE__*/
function () {
  function SearchLibrary() {
    _classCallCheck(this, SearchLibrary);
  }

  _createClass(SearchLibrary, [{
    key: "replyAboutLibrary",
    value: function replyAboutLibrary(text) {
      var _this = this;

      var xhr = new XMLHttpRequest();

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("POST", "http://aiopen.etri.re.kr:8000/Demo/WiseQAnal");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        return _this.onCompletedSearchBook(xhr);
      });
      xhr.send("{\"request_id\": \"reserved field\",\"argument\": {\"text\": \"".concat(text, "\"}}"));
      return this;
    }
  }, {
    key: "onCompletedSearchBook",
    value: function onCompletedSearchBook(xhr) {
      var _this2 = this;

      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      var COMPLETED = 4,
          OK = 200;

      if (xhr.readyState === COMPLETED) {
        if (xhr.status === OK) {
          if (isTopicBook()) {
            chatBody.reply(i18next.t("INPUT_BOOK_NAME"));
            chatBody.waitSend(function (data) {
              _this2.searchBook(data);
            });
          }
        } else {
          throw new Error("No XHR");
        }
      }

      function isTopicBook() {
        var condition = JSON.parse(xhr.responseText)["return_object"]["orgQInfo"]["orgQUnit"]["vSATs"][0]["strSAT"];

        if (JSON.parse(xhr.responseText)["return_object"]["orgQInfo"]["orgQUnit"]["vSATs"][0]) {
          return condition === "AFW_DOCUMENT" || condition === "OGG_LIBRARY";
        }

        return false;
      }
    } // 책 이름 그대로 검색 받으면, 검색 해줌

  }, {
    key: "searchBook",
    value: function searchBook(text) {
      var _this3 = this;

      var xhr = new XMLHttpRequest();

      if (!xhr) {
        throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
      }

      xhr.open("GET", "https://lib.hanyang.ac.kr/pyxis-api/2/collections/6/search?all=k%7Ca%7C".concat(text, "&rq=BRANCH%3D9"));
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        return _this3.onReadyBookSearch(xhr);
      });
      xhr.send();
    }
  }, {
    key: "onReadyBookSearch",
    value: function onReadyBookSearch(xhr) {
      var COMPLETED = 4,
          OK = 200;
      var title, author, publication, imageSrc, isCheckout;

      if (xhr.readyState === COMPLETED) {
        if (xhr.status === OK) {
          // console.log(JSON.parse(xhr.responseText)[`data`][`list`])
          for (var i = 0; i < 3; i++) {
            title = JSON.parse(xhr.responseText)["data"]["list"][i]["titleStatement"];
            author = JSON.parse(xhr.responseText)["data"]["list"][i]["author"];
            publication = JSON.parse(xhr.responseText)["data"]["list"][i]["publication"];
            imageSrc = JSON.parse(xhr.responseText)["data"]["list"][i]["thumbnailUrl"];
            isCheckout = JSON.parse(xhr.responseText)["data"]["list"][i]["branchVolumes"].find(function (each) {
              return each.name === "ERICA\uD559\uC220\uC815\uBCF4\uAD00";
            })["cState"]; // console.log(title, author, publication, imageSrc, isCheckout)							

            this.createBookList({
              title: title,
              author: author,
              publication: publication,
              imageSrc: imageSrc,
              isCheckout: isCheckout
            });
          }
        } else {
          throw new Error("No XHR");
        }
      }
    }
  }, {
    key: "createBookList",
    value: function createBookList(bookInfo) {
      var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");
      chatBody.reply("<book-list \n\t\t\timageSrc='".concat(bookInfo.imageSrc, "' \n\t\t\ttitle='").concat(bookInfo.title, "' \n\t\t\tauthor='").concat(bookInfo.author, "' \n\t\t\tpublication='").concat(bookInfo.publication, "' \n\t\t\tisCheckout='").concat(bookInfo.isCheckout, "' ></book-list>"));
    }
  }]);

  return SearchLibrary;
}();

var searchLibrary = new SearchLibrary();
/* harmony default export */ __webpack_exports__["default"] = (searchLibrary);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchFoodMenu =
/*#__PURE__*/
function () {
  function SearchFoodMenu() {
    _classCallCheck(this, SearchFoodMenu);
  }

  _createClass(SearchFoodMenu, [{
    key: "openHanyangSite",
    value: function openHanyangSite() {
      var xhr = new XMLHttpRequest();

      if (!xhr) {
        throw new Error("Err. XHR");
      }

      xhr.open("GET", "http://localhost:8080/hanyangfood");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var chatBody = document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");

            if (typeof JSON.parse(xhr.responseText) === "string") {
              return;
            }

            JSON.parse(xhr.responseText).forEach(function (each) {
              chatBody.reply(each);
            });
          } else {
            throw new Error("No XHR");
          }
        }
      });
      xhr.send();
    }
  }]);

  return SearchFoodMenu;
}();

var searchFoodMenu = new SearchFoodMenu();
/* harmony default export */ __webpack_exports__["default"] = (searchFoodMenu);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_bot_setting_window_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\tmain {\n\t\tposition: absolute;\t\t\n\t\ttop: 0;\n\t\tleft: 0;\t\t\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 80px 1fr 100px;\n\t}\n\n\tbot-setting-header {\n\t\tbackground-color: #A9BDCE;\n\t}\n\n\tbot-setting-body {\t\t\n\t\twhite-space: pre;\n\t\tpadding-left: 10px;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<bot-setting-header></bot-setting-header>\n\t\t\t\t<bot-setting-body></bot-setting-body>\n\t\t\t\t<bot-setting-footer></bot-setting-footer>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BotSettingWindow =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BotSettingWindow, _HTMLElement);

  function BotSettingWindow() {
    var _this;

    _classCallCheck(this, BotSettingWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BotSettingWindow).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    return _this;
  }

  _createClass(BotSettingWindow, [{
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return BotSettingWindow;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("bot-setting-window", BotSettingWindow);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _bot_setting_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\t* {\n\t\tuser-select: none;\n\t}\n\n\tmain {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbox-sizing: border-box;\t\t\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 80px 1fr 100px;\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t.setting-img-wrap {\n\t\tposition: relative;\n\t\tpadding: 15px;\t\n\t}\n\t\n\t.setting-img {\n\t\tposition: absolute;\n\t\tbackground-color: white;\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 25px;\n\t\tbackground-image: url(/images/bot-setting.svg);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tbackground-size: 30px;\n\t}\n\n\t.title-submenu {\n\t\tdisplay:grid;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\n\t.title {\n\t\tpadding-top: 20px;\n\t\tfont-size: 12px;\n\t\tfont-weight: bold;\n\t\tcolor: #4A4C4E;\n\t}\n\n\t.button-rivescript {\n\t\tborder: 0;\n\t\tbackground-color: hsl(162, 100%, 0%);\n\t\tcolor: white;\n\t\tbox-sizing: border-box;\n\t\theight: 20px;\n\t\tborder-radius: 2px;\n\t}\n\n\t.button-rivescript:not(.on):hover, .button-rivescript.on {\n\t\tbackground-color: hsl(162, 100%, 43%);\n\t}\n\n\t.button-rivescript.on:hover {\n\t\tbackground-color: hsl(162, 100%, 0%);\n\t}\n\n\t.menu svg:hover {\n\t\tcolor: black;\n\t}\n\n\t.menu {\n\t\ttext-align: right;\n    \tpadding-right: 15px;\n\t}\n\n\t.menu > svg {\n\t\tvertical-align: middle;\t\n\t\tcursor: pointer;\t\t\n\t\tposition:relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tcolor: #65717C;\n\t}\t\n\n\t.menu-button {\n\t\tvertical-align: middle;\n\t\tposition:relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tz-index: 20;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tbackground-color: transparent;\n\t}\n\n\t.menu-button svg {\n\t\tcolor: #65717C;\n\t\tcursor: pointer;\n\t}\n\n\tbot-setting-menu {\n\t\tdisplay: none;\t\t\t\n\t\tposition: absolute;\n\t\ttop: 24px;\n\t\tright: -10px;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<main>\n\t\t\t\t<div class='setting-img-wrap'>\n\t\t\t\t\t<span class='setting-img'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='title-submenu'>\n\t\t\t\t\t<div class='title'>", "</div>\n\t\t\t\t\t<div class='submenu'>\n\t\t\t\t\t\t<button class='button-rivescript' title='", "'>", "</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='menu'>\t\t\n\t\t\t\t\t<button class='menu-button' title='\uBA54\uB274'>\n\t\t\t\t\t\t<svg height='20' width='32' aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"bars\" class=\"svg-inline--fa fa-bars fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z\"></path></svg>\n\t\t\t\t\t\t<bot-setting-menu></bot-setting-menu>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BotSettingHeader =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BotSettingHeader, _HTMLElement);

  function BotSettingHeader() {
    var _this;

    _classCallCheck(this, BotSettingHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BotSettingHeader).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.eventClickMenu = _this.onClickMenu.bind(_assertThisInitialized(_this));
    _this.eventClickRivescript = _this.onClickRivescript.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BotSettingHeader, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector(".menu-button").addEventListener("click", this.eventClickMenu, true);
      this.shadowRoot.querySelector(".button-rivescript").addEventListener("click", this.eventClickRivescript, true);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector(".menu-button").removeEventListener("click", this.eventClickMenu, true);
      this.shadowRoot.querySelector(".button-rivescript").removeEventListener("click", this.eventClickRivescript, true);
    }
  }, {
    key: "onClickMenu",
    value: function onClickMenu() {
      var botSettingMenu = this.shadowRoot.querySelector("bot-setting-menu");

      if (botSettingMenu.menuState === "hide") {
        botSettingMenu.show();
      } else {
        botSettingMenu.hide();
      }
    }
  }, {
    key: "onClickRivescript",
    value: function onClickRivescript() {
      var body = document.querySelector("bot-setting-window").shadowRoot.querySelector("bot-setting-body");
      var buttonRivescript = this.shadowRoot.querySelector(".button-rivescript");
      this.emptyBody();

      if (buttonRivescript.classList.contains("on")) {
        buttonRivescript.classList.remove("on");
      } else {
        buttonRivescript.classList.add("on");
        this.readRivescript().then(function (script) {
          body.textContent = script;
        }).catch(function (error) {
          throw new Error("No read Rivescript: ".concat(error));
        });
      }
    }
  }, {
    key: "emptyBody",
    value: function emptyBody() {
      document.querySelector("bot-setting-window").shadowRoot.querySelector("bot-setting-body").innerHTML = "";
    }
  }, {
    key: "readRivescript",
    value: function readRivescript() {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var COMPLETE = 200;
        xhr.open("GET", "http://localhost:8080/assets/hy-lion.rive");
        xhr.send();
        xhr.addEventListener("readystatechange", function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === COMPLETE) {
              resolve(xhr.response);
            } else {
              reject(xhr.statusText);
            }
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("BOT_SETTING_TITLE"), i18next.t("CONVERT_RIVESCRIPT"), i18next.t("CONVERT_RIVESCRIPT"));
    }
  }]);

  return BotSettingHeader;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("bot-setting-header", BotSettingHeader);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style scoped>\n\t.menu::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -57px;\n\t\tright: -5px;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tz-index: -1;\n\t}\n\n\t.menu {\n\t\tbackground-color: white;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: max-content;\n\t\tlist-style: none;\n\t\tborder-radius: 2px;\n\t}\n\n\t.menu li {\n\t\tpadding: 10px 15px 10px 15px;\n\t\tmargin: 0 1px 0 1px;\n\t\tbox-sizing: border-box;\n\t\tmax-width: 200px;\n\t\tfont-size: 12px;\n\t\ttext-align: left;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t.menu li:not(:last-child) {\n\t\tborder-bottom: 1px solid #F0F0F0;\n\t}\n\n\t.menu li:hover {\n\t\tbackground-color: #F0F0F0;\n\t}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t\t<ul class='menu'>\n\t\t\t\t<li class='chat-window' title='", "'>", "</li>\n\t\t\t</ul>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BotSettingMenu =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BotSettingMenu, _HTMLElement);

  function BotSettingMenu() {
    var _this;

    _classCallCheck(this, BotSettingMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BotSettingMenu).call(this));

    _this.attachShadow({
      mode: "open"
    });

    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(_this.render(), _this.shadowRoot);
    _this.menuState = "hide";
    _this.eventClickChatWindow = _this.onClickChatWindow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BotSettingMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.querySelector(".menu .chat-window").addEventListener("click", this.eventClickChatWindow);
      this.shadowRoot.querySelector(".menu").addEventListener("click", function (event) {
        return _this2.onClickOutOfMenu(event);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector(".menu .chat-window").removeEventListener("click", this.eventClickChatWindow);
    }
  }, {
    key: "onClickOutOfMenu",
    value: function onClickOutOfMenu(event) {
      if (event.target.classList.contains("menu")) {
        this.hide();
      }
    }
  }, {
    key: "onClickChatWindow",
    value: function onClickChatWindow() {
      this.hide();
      this.openChatWindow();
    }
  }, {
    key: "openChatWindow",
    value: function openChatWindow() {
      _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadingDOM();
      _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderChatWindow();
    }
  }, {
    key: "show",
    value: function show() {
      this.style.display = "block";
      this.menuState = "show";
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style.display = "none";
      this.menuState = "hide";
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, i18next.t("MENU_CHAT_WINDOW"), i18next.t("MENU_CHAT_WINDOW"));
    }
  }]);

  return BotSettingMenu;
}(_wrapNativeSuper(HTMLElement));

var style = Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("bot-setting-menu", BotSettingMenu);

/***/ })
/******/ ]);