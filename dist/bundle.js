(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, h1, h2, h3, h4, h5, h6, p, blockquote, code, img, dl, dt, dd, ol, ul, li, fieldset, legend, caption { margin: 0; padding: 0; border: 0; }\r\ndiv, span, article, section, header, footer, p, ul, li, fieldset, legend, label, a, nav { box-sizing: border-box; }\r\nhtml {\r\n    height: 100%;\r\n}\r\nbody {\r\n    min-height: 100%;\r\n}\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/js.png */ "./src/img/js.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\r\n    background: #000000;\r\n    height: 100vh;\r\n    color: white;\r\n}\r\n\r\n.title {\r\n    font-weight: normal;\r\n    text-align: center;\r\n    font-size: 3em;\r\n}\r\n\r\n.game-info {\r\n    font-size: 2rem;\r\n}\r\n\r\n.dim{\r\n    z-index: 10;\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    opacity: 0.8;\r\n    text-align: center;\r\n    background: black;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.start_wrap{\r\n    z-index: 9999;\r\n    position: absolute;\r\n    padding-top: 50%;\r\n    top:0;\r\n    left:0;\r\n    font-size: 3rem;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.start_wrap .start{\r\n    cursor: pointer;\r\n}\r\n\r\n.info-container {\r\n    grid-column: 1 /5;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, auto);\r\n    grid-gap: 10px;\r\n    margin: 50px;\r\n    justify-content: center;\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    width: 105px;\r\n    height: 155px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.card-side {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0.5em;\r\n    box-sizing: border-box;\r\n    border: 1px solid #801e2e;\r\n    backface-visibility: hidden; /*뒷면 hidden*/\r\n    transition: 0.3s;\r\n}\r\n\r\n.card-side-front {\r\n    background-size: contain;\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.card-side-back {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n    background-size: contain;\r\n    cursor: pointer;\r\n}\r\n\r\n.card.flip  .card-side-back{\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.card.flip  .card-side-front{\r\n    transform: rotateY(360deg);\r\n}\r\n\r\n.card-side-back:hover{\r\n    transform: translateZ(50px);\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/img/angular.png":
/*!*****************************!*\
  !*** ./src/img/angular.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "76d97a141a5ead8a47c8989e798808bd.png");

/***/ }),

/***/ "./src/img/docker.png":
/*!****************************!*\
  !*** ./src/img/docker.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b1943388a3ac1ebada0c61675c2b35a.png");

/***/ }),

/***/ "./src/img/game.png":
/*!**************************!*\
  !*** ./src/img/game.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4fe56df00fa4a07a03b2a02426df20fa.png");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e45ebd5258d77392cb78ceb7b3133eeb.png");

/***/ }),

/***/ "./src/img/html.png":
/*!**************************!*\
  !*** ./src/img/html.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1f26ea5ae2f0458bfa69227efd6268c.png");

/***/ }),

/***/ "./src/img/js.png":
/*!************************!*\
  !*** ./src/img/js.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b54fc1c9e4f229859a1b00205f5d14c0.png");

/***/ }),

/***/ "./src/img/node.svg":
/*!**************************!*\
  !*** ./src/img/node.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94cafb0d1b4a2875215db17964f0938a.svg");

/***/ }),

/***/ "./src/img/react.png":
/*!***************************!*\
  !*** ./src/img/react.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "638be90904f9f9248d3c69cb2992c562.png");

/***/ }),

/***/ "./src/img/vue.png":
/*!*************************!*\
  !*** ./src/img/vue.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf23526f451784ff137f161b8fe18d5a.png");

/***/ }),

/***/ "./src/img/ws.png":
/*!************************!*\
  !*** ./src/img/ws.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c39aa79c697c45b25e39e327430edc4.png");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_angular_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/angular.png */ "./src/img/angular.png");
/* harmony import */ var _img_node_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/node.svg */ "./src/img/node.svg");
/* harmony import */ var _img_react_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/react.png */ "./src/img/react.png");
/* harmony import */ var _img_vue_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/vue.png */ "./src/img/vue.png");
/* harmony import */ var _img_html_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/html.png */ "./src/img/html.png");
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/github.png */ "./src/img/github.png");
/* harmony import */ var _img_ws_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/ws.png */ "./src/img/ws.png");
/* harmony import */ var _img_docker_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/docker.png */ "./src/img/docker.png");
/* harmony import */ var _img_game_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/game.png */ "./src/img/game.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }












var datas = [{
  frontImage: _img_angular_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  backImage: 'js.png',
  key: 1
}, {
  frontImage: _img_node_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  backImage: 'js.png',
  key: 2
}, {
  frontImage: _img_react_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  backImage: 'js.png',
  key: 3
}, {
  frontImage: _img_vue_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  backImage: 'js.png',
  key: 4
}, {
  frontImage: _img_html_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  backImage: 'js.png',
  key: 5
}, {
  frontImage: _img_github_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  backImage: 'js.png',
  key: 6
}, {
  frontImage: _img_ws_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  backImage: 'js.png',
  key: 7
}, {
  frontImage: _img_docker_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  backImage: 'js.png',
  key: 8
}];

(function () {
  var containerElem = document.querySelector('.container');
  var dimElem = document.querySelector('.dim');
  var startWrap = document.querySelector('.start_wrap');
  var startElem = document.querySelector('.start');
  var timeElem = document.querySelector('#time-remaining');
  var REMAIN_TIME = 60;
  var remainTime = REMAIN_TIME;
  var clickElement = [];
  var matchingCount = 0;
  var interval = null;
  var isRestart = false;
  initCard();
  containerElem.addEventListener('click', onClickCard);
  containerElem.addEventListener('transitionend', checkMatching);
  startElem.addEventListener('click', startGame);

  function startGame(e) {
    if (!isRestart && e.target.classList.contains('start_wrap')) {
      startInterval();
    } else {
      reset();
      startInterval();
    }

    hide(dimElem);
    hide(startWrap);
  }

  function show(elem) {
    elem.style.display = 'block';
  }

  function hide(elem) {
    elem.style.display = 'none';
  }

  function setText(elem, text) {
    elem.innerHTML = text;
  }

  function startInterval() {
    interval = setInterval(function () {
      remainTime -= 1;
      setText(timeElem, remainTime);

      if (remainTime === 0) {
        clearInterval(interval);
        show(dimElem);
        show(startWrap);
        setText(startElem, "Game Over<br/>Restart");
        isRestart = true;
        updateScore(REMAIN_TIME - remainTime);
      }
    }, 1000);
  }

  function updateScore(score) {
    var scoreElem = document.querySelector('.score');
    var frag = document.createDocumentFragment();
    var scores = getStorage('scores');
    scores.push(score);
    scores.sort();
    Array.from(scoreElem.childNodes).forEach(function (child) {
      scoreElem.removeChild(child);
    });
    scores.forEach(function (item, index) {
      var liElem = document.createElement('li');

      if (index > 2) {
        return;
      }

      setText(liElem, "".concat(index + 1, "\uC704 ").concat(item, "\uCD08"));
      frag.appendChild(liElem);
    });
    scoreElem.appendChild(frag);
    setStorage('scores', scores);
  }

  function onClickCard(e) {
    if (clickElement.length < 2 && e.target.classList.contains('card-side-back')) {
      e.target.parentNode.classList.add('flip');
      clickElement.push(e.target);
    }
  }

  function checkMatching(e) {
    if (clickElement.length !== 2) {
      return;
    }

    if (clickElement[0].dataset.key === clickElement[1].dataset.key) {
      matchingCount++;
    } else {
      clickElement.forEach(function (i) {
        i.parentNode.classList.remove('flip');
      });
    }

    checkWin(matchingCount);
    clickElement = [];
  }

  function checkWin(count) {
    if (count === 8) {
      clearInterval(interval);
      show(dimElem);
      show(startWrap);
      setText(startElem, "Complete! <br/> Restart");
      isRestart = true;
      updateScore(REMAIN_TIME - remainTime);
    }
  }

  function initCard() {
    var dataSource = shuffle(datas); // const container = document.querySelector( '.container' );

    var cards = document.createDocumentFragment();
    dataSource && dataSource.forEach(function (item) {
      var frontImage = item.frontImage,
          backImage = item.backImage,
          key = item.key;
      cards.append(createCard({
        frontImage: frontImage,
        backImage: backImage,
        key: key
      }));
    });
    containerElem.appendChild(cards);

    if (!getStorage('scores')) {
      setStorage('scores', []);
    }
  }

  function setStorage(key, obj) {
    var myStorage = window.localStorage;
    return myStorage.setItem(key, JSON.stringify(obj));
  }

  function getStorage(key) {
    var myStorage = window.localStorage;
    return JSON.parse(myStorage.getItem(key));
  }

  function createCard(_ref) {
    var frontImage = _ref.frontImage,
        backImage = _ref.backImage,
        key = _ref.key;
    var cardDiv = document.createElement('div');
    var frontDiv = document.createElement('div');
    var backDiv = document.createElement('div');
    cardDiv.classList.add('card');
    frontDiv.classList.add('card-side', 'card-side-front');
    backDiv.classList.add('card-side', 'card-side-back');
    frontDiv.style.backgroundImage = "url(\"".concat(frontImage, "\")");
    frontDiv.style.backgroundRepeat = 'no-repeat';
    backDiv.dataset.key = key;
    cardDiv.appendChild(frontDiv);
    cardDiv.appendChild(backDiv);
    return cardDiv;
  }

  function reset() {
    //남은시간초기화
    setText(timeElem, REMAIN_TIME);
    matchingCount = 0;
    remainTime = REMAIN_TIME; //카드 초기화

    Array.from(containerElem.childNodes).forEach(function (child) {
      if (child.classList && child.classList.contains('card')) {
        containerElem.removeChild(child);
      }
    }); //initCard

    initCard();
  }

  function shuffle(datas) {
    var _double = [].concat(_toConsumableArray(datas), _toConsumableArray(datas.reverse()));

    var length = _double.length;

    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * length);
      var _ref2 = [_double[random], _double[i]];
      _double[i] = _ref2[0];
      _double[random] = _ref2[1];
    }

    return _double;
  }
})();

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map