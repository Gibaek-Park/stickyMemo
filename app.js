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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/Memo.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/Memo.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html,\\nbody,\\ndiv,\\nspan,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\na,\\nem,\\nimg,\\nstrong,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 12px;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\n\\n.blind {\\n  overflow: hidden;\\n  position: absolute;\\n  clip: rect(0 0 0 0);\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n}\\n\\n#wrap {\\n  height: 100%;\\n  background-color: #f2f2f2;\\n}\\n\\n#wrap .header {\\n  position: relative;\\n  height: 15px;\\n  background-color: #f9f978;\\n  border-bottom: 1px solid #eee;\\n  cursor: move;\\n}\\n\\n.memo {\\n  position: absolute;\\n  background-color: lightyellow;\\n  border: 1px solid #eee;\\n  resize: both;\\n  overflow: auto;\\n}\\n\\n.content {\\n  position: relative;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n  padding: 10px;\\n}\\n\\n.content .textarea {\\n  outline: none;\\n}\\n\\n.btn_close {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 15px;\\n  height: 15px;\\n  appearance: button;\\n  -webkit-appearance: button;\\n  -moz-appearance: button;\\n  border: 0;\\n  background-color: #fff;\\n  cursor: pointer;\\n  outline: 0;\\n  text-align: center;\\n}\\n\\n.btn_close:after {\\n  position: absolute;\\n  top: -1px;\\n  right: 0;\\n  width: 15px;\\n  content: \\\"\\\\d7\\\";\\n  font-size: 15px;\\n  line-height: 15px;\\n  color: #666;\\n  text-align: center;\\n}\\n\\n.btn_size {\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  width: 15px;\\n  height: 15px;\\n  appearance: button;\\n  -webkit-appearance: button;\\n  -moz-appearance: button;\\n  border: 0;\\n  background: transparent;\\n  cursor: nwse-resize;\\n  outline: 0;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/Memo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/Memo.css":
/*!**************************!*\
  !*** ./src/css/Memo.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Memo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/Memo.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/Memo.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Memo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Memo */ \"./src/js/Memo.js\");\n/* harmony import */ var _css_Memo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Memo.css */ \"./src/css/Memo.css\");\n/* harmony import */ var _css_Memo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Memo_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n_js_Memo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Memo.js":
/*!************************!*\
  !*** ./src/js/Memo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./src/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Memo =\n/*#__PURE__*/\nfunction () {\n  function Memo(content, width, height, top, left) {\n    _classCallCheck(this, Memo);\n\n    this.content = content;\n    this.width = width;\n    this.height = height;\n    this.top = top;\n    this.left = left;\n  }\n\n  _createClass(Memo, [{\n    key: \"createMemo\",\n    value: function createMemo(idx) {\n      var _this = this;\n\n      var wrap = document.querySelector('#wrap');\n      var temp = document.getElementsByTagName(\"template\")[0];\n      var clone = temp.content.cloneNode(true);\n      var cloneWrap = clone.querySelector('.memo');\n      var cloneHeader = cloneWrap.querySelector('.header');\n      var btnClose = cloneWrap.querySelector('.btn_close');\n      var cloneTextArea = cloneWrap.querySelector('.textarea');\n      var btnSize = cloneWrap.querySelector('.btn_size');\n      cloneWrap.setAttribute('style', \"top:\".concat(this.top, \"px;left:\").concat(this.left, \"px;\"));\n      cloneWrap.setAttribute('index', idx);\n      cloneTextArea.setAttribute('style', \"width:\".concat(this.width, \"px;height:\").concat(this.height, \"px\"));\n      cloneTextArea.textContent = this.content;\n      cloneWrap.addEventListener('contextmenu', function (e) {\n        return _this.add(e, cloneWrap);\n      });\n      cloneWrap.addEventListener('click', function (e) {\n        return _this.setPosition(e);\n      });\n      cloneHeader.addEventListener('dragstart', function (e) {\n        return _this.memoDragStart(e);\n      }, false);\n      cloneHeader.addEventListener('dragend', function (e) {\n        return _this.memoDragEnd(e);\n      }, false);\n      btnClose.addEventListener('click', function (e) {\n        return _this.remove(e);\n      });\n      cloneTextArea.addEventListener('keyup', function (e) {\n        return _this.editTextArea(e);\n      });\n      btnSize.addEventListener('mousedown', function (e) {\n        return _this.memoSizeDragStart(e);\n      });\n      btnSize.addEventListener('mouseup', function (e) {\n        return _this.memoSizeDragEnd(e);\n      });\n      btnSize.addEventListener('mousemove', function (e) {\n        return _this.memoSizeDrag(e);\n      });\n      this.addMemoListItems(this);\n      wrap.appendChild(clone);\n    }\n  }, {\n    key: \"add\",\n    value: function add(e, target) {\n      var _this2 = this;\n\n      e.preventDefault();\n\n      var _target$getBoundingCl = target.getBoundingClientRect(),\n          top = _target$getBoundingCl.top,\n          left = _target$getBoundingCl.left;\n\n      top += 50;\n      left += 60;\n      var wrap = document.querySelector('#wrap');\n      var clone = target.cloneNode(true);\n      var cloneHeader = clone.querySelector('.header');\n      var cloneTextArea = clone.children[1].children[0];\n      var btnClose = clone.querySelector('.btn_close');\n      var textArea = target.children[1].children[0];\n      var btnSize = clone.querySelector('.btn_size');\n\n      var _textArea$getBounding = textArea.getBoundingClientRect(),\n          width = _textArea$getBounding.width,\n          height = _textArea$getBounding.height;\n\n      var MaxIndex = wrap.children.length;\n      clone.setAttribute('style', \"top:\".concat(top, \"px;left:\").concat(left, \"px\"));\n      clone.setAttribute('index', MaxIndex);\n      cloneTextArea.textContent = '';\n      clone.addEventListener('contextmenu', function (e) {\n        return _this2.add(e, clone);\n      });\n      clone.addEventListener('click', function (e) {\n        return _this2.setPosition(e);\n      });\n      cloneHeader.addEventListener('dragstart', function (e) {\n        return _this2.memoDragStart(e);\n      });\n      cloneHeader.addEventListener('dragend', function (e) {\n        return _this2.memoDragEnd(e);\n      });\n      btnClose.addEventListener('click', function (e) {\n        return _this2.remove(e);\n      });\n      cloneTextArea.addEventListener('keyup', function (e) {\n        return _this2.editTextArea(e);\n      });\n      btnSize.addEventListener('dragstart', function (e) {\n        return _this2.memoSizeDragStart(e);\n      });\n      btnSize.addEventListener('dragend', function (e) {\n        return _this2.memoSizeDragEnd(e);\n      });\n      this.addMemoListItems({\n        content: '',\n        width: width,\n        height: height,\n        top: top,\n        left: left\n      });\n      wrap.appendChild(clone);\n    }\n  }, {\n    key: \"setPosition\",\n    value: function setPosition(e) {\n      var wrap = document.querySelector('#wrap');\n      var target = e.currentTarget;\n      var index = Number(target.getAttribute('index'));\n\n      if (typeof wrap.children[index] !== 'undefined' && wrap.children[index] === target) {\n        var textArea = target.querySelector('.textarea');\n        var content = textArea.textContent;\n        wrap.appendChild(target);\n        textArea.focus();\n        textArea.textContent = content;\n        this.sortMemoListItems(index);\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(e) {\n      if (Memo.listItems.length > 1) {\n        var target = e.target.parentNode.parentNode;\n        var index = Number(target.getAttribute('index'));\n        wrap.removeChild(target);\n        this.updateMemoListItems(index);\n        this.sortMemoListItems(index, _types__WEBPACK_IMPORTED_MODULE_0__[\"types\"].DELETE);\n      }\n    }\n  }, {\n    key: \"editTextArea\",\n    value: function editTextArea(e) {\n      var content = e.target.textContent;\n      var index = Number(e.target.parentNode.parentNode.getAttribute('index'));\n      var listItems = Memo.listItems.map(function (item, idx) {\n        return idx === index ? _objectSpread({}, item, {\n          content: content\n        }) : item;\n      });\n      this.setMemoListItems(listItems);\n    }\n  }, {\n    key: \"memoDragStart\",\n    value: function memoDragStart(e) {\n      this.prevTop = e.pageY;\n      this.prevLeft = e.pageX;\n    }\n  }, {\n    key: \"memoDragEnd\",\n    value: function memoDragEnd(e) {\n      var target = e.currentTarget.parentNode;\n      var targetTop = target.offsetTop;\n      var targetLeft = target.offsetLeft;\n      var top = e.pageY - this.prevTop + targetTop;\n      var left = e.pageX - this.prevLeft + targetLeft;\n      target.style = \"top:\".concat(top, \"px;left:\").concat(left, \"px\");\n      var index = Number(target.getAttribute('index'));\n      var listItems = Memo.listItems.map(function (item, idx) {\n        return idx === index ? _objectSpread({}, item, {\n          top: top,\n          left: left\n        }) : item;\n      });\n      this.setMemoListItems(listItems);\n    }\n  }, {\n    key: \"memoSizeDragStart\",\n    value: function memoSizeDragStart(e) {\n      this.isDrawing = true;\n    }\n  }, {\n    key: \"memoSizeDragEnd\",\n    value: function memoSizeDragEnd(e) {\n      this.isDrawing = false;\n    }\n  }, {\n    key: \"memoSizeDrag\",\n    value: function memoSizeDrag(e) {\n      if (this.isDrawing) {\n        var target = e.target.previousElementSibling;\n        var memo = target.parentNode.parentNode;\n        var top = memo.offsetTop;\n        var left = memo.offsetLeft;\n        target.style.width = e.pageX - left - 15 + 'px';\n        target.style.height = e.pageY - top - 25 + 'px';\n      }\n    }\n  }, {\n    key: \"getMemoListItems\",\n    value: function getMemoListItems() {\n      return Memo.listItems;\n    }\n  }, {\n    key: \"addMemoListItems\",\n    value: function addMemoListItems(_ref) {\n      var content = _ref.content,\n          width = _ref.width,\n          height = _ref.height,\n          top = _ref.top,\n          left = _ref.left;\n      var listItems = Memo.listItems.concat({\n        content: content,\n        width: width,\n        height: height,\n        top: top,\n        left: left\n      });\n      this.setMemoListItems(listItems);\n    }\n  }, {\n    key: \"updateMemoListItems\",\n    value: function updateMemoListItems(index) {\n      var listItems = Memo.listItems.filter(function (item, idx) {\n        return idx !== index;\n      });\n      this.setMemoListItems(listItems);\n    }\n  }, {\n    key: \"setMemoListItems\",\n    value: function setMemoListItems() {\n      var listItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Memo.listItems;\n      Memo.listItems = listItems;\n      localStorage.setItem('listItems', JSON.stringify(listItems));\n    }\n  }, {\n    key: \"sortMemoListItems\",\n    value: function sortMemoListItems(index, type) {\n      var newArr = [];\n      var tempVal = {};\n      var wrap = document.querySelector('#wrap'); // index 재 정의 겸 listItems 재 정렬\n\n      if (type !== _types__WEBPACK_IMPORTED_MODULE_0__[\"types\"].DELETE) {\n        Array.from(wrap.children).forEach(function (iter, idx) {\n          iter.setAttribute('index', idx);\n        });\n        Memo.listItems.forEach(function (item, idx) {\n          if (idx === index) {\n            tempVal = item;\n          } else {\n            newArr.push(item);\n          }\n        });\n        Object.keys(tempVal).length > 0 && newArr.push(tempVal);\n        this.setMemoListItems(newArr);\n      }\n    }\n  }], [{\n    key: \"init\",\n    value: function init() {\n      if (localStorage.length === 0 || localStorage.getItem('listItems')[0] !== '[') {\n        var memo = new Memo('a라는 메모', 200, 200, 200, 200);\n        memo.createMemo();\n      } else {\n        var listItems = JSON.parse(localStorage.getItem('listItems'));\n        listItems.forEach(function (iter, idx) {\n          var content = iter.content,\n              width = iter.width,\n              height = iter.height,\n              top = iter.top,\n              left = iter.left;\n          var memo = new Memo(content, width, height, top, left);\n          memo.createMemo(idx);\n        });\n      }\n    }\n  }]);\n\n  return Memo;\n}();\n\n_defineProperty(Memo, \"listItems\", []);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Memo);\n\n//# sourceURL=webpack:///./src/js/Memo.js?");

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return types; });\nvar types = {\n  DELETE: 'DELETE'\n};\n\n//# sourceURL=webpack:///./src/types.js?");

/***/ })

/******/ });