"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --lightwhite: rgb(255,255,255, 75%);
  --floralwhite: floralwhite;
  --nightmode: linear-gradient(rgb(0, 0, 0), rgb(17, 17, 0), rgb(51, 34, 0));
  --daymode: linear-gradient(rgb(0, 153, 255), rgb(0, 102, 153), rgb(0, 51, 102));
}

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100hv;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: floralwhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--floralwhite);
  text-align: center;
}

.logo {
  margin-top: 20px;
  font-size: 48px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 40px;
  margin: 20px 0;
}

.search-container.active {
  border-color: #900;
  background-color: #fdd;
  animation: shake 0.5s ease-in-out;
  animation-fill-mode: both;
}


#search {
  background-color: var(--floralwhite);
  appearance: none;
  outline: none;
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
}

.submit {
  background-color: var(--floralwhite);
  border-radius: 3px;
  width: 35px;
  height: 40px;
  border: none;
  margin: -5px;
  cursor: pointer;
}

.units {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.us-units,
.metric-units {
  background-color: var(--floralwhite);
  color: #444;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 3px;
  cursor: pointer;
}


.current-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}

.location {
  width: 100%;
  margin-top: 10px;
  font-size: 32px;
}

.time {
  color: var(--lightwhite);
}

.current-temp {
  font-size: 78px;
  margin: 15px 0;
}

.text {
  font-size: 24px;
}

.feels-like {
  font-size: 20px;
  color: var(--lightwhite);
}

.weather-details {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 75px);
  margin: 10px 0;
}

.weather-details div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-details div:last-child {
  font-size: 20px;
  color: var(--floralwhite);
}

.weather-details div:first-child {
  padding-bottom: 15px;
  font-size: 16px;
  color: var(--lightwhite);
}

#moon-phase {
  font-size: 32px;
  margin-top: -12px;
}

.forecast > div {
  border-bottom: 2px solid var(--lightWhite);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  gap: 5px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
}

.forecast > div > div {
  padding-bottom: 10px;
}

.forecast > div > div:first-child {
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
}

.forecast > div > div:last-child {
  grid-row: 1/3;
  grid-column: 3/4;
  align-self: center;
  font-size: 36px;
}

.forecast > div:last-child {
  border: none;
}

.forecast {
  width: 100%;
  padding: 25px;
}

.footer {
  width: 100%;
  font-size: 14px;
  color: var(--lightwhite);
  margin: 25px 0;
}

.footer div {
  display: inline;
}

.footer a {
  color: var(--floralwhite);
  text-decoration: none;
  cursor: pointer
}

.low-uv {
  background-color: green;
}

.mid-uv {
  background-color: orange;
}

.high-uv {
  background-color: red;
}

.very-high-uv {
  background-color: darkred;
}


.low-uv,
.mid-uv,
.high-uv,
.very-high-uv {
  border-radius: 50%;
  width: 35px;
  padding: 5px;
  margin-top: -8px;
}

.loading-spinner {
  visibility: hidden;
  position: fixed;
  top: 40%;
  border: 25px solid rgba(255, 255, 255, 0.25);
  border-top: 25px solid var(--floralwhite);
  border-radius: 50%;
  width: 200px; 
  height: 200px;
  animation: spin 0.5s linear infinite;
}

.loading-spinner.active {
  visibility: visible;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --lightwhite: rgb(255,255,255, 75%);\n  --floralwhite: floralwhite;\n  --nightmode: linear-gradient(rgb(0, 0, 0), rgb(17, 17, 0), rgb(51, 34, 0));\n  --daymode: linear-gradient(rgb(0, 153, 255), rgb(0, 102, 153), rgb(0, 51, 102));\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100hv;\n  width: 100%;\n  font-family: 'Ubuntu', sans-serif;\n  color: floralwhite;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--floralwhite);\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  font-size: 48px;\n}\n\n.search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 280px;\n  height: 40px;\n  margin: 20px 0;\n}\n\n.search-container.active {\n  border-color: #900;\n  background-color: #fdd;\n  animation: shake 0.5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n\n#search {\n  background-color: var(--floralwhite);\n  appearance: none;\n  outline: none;\n  width: 280px;\n  height: 40px;\n  border: none;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.submit {\n  background-color: var(--floralwhite);\n  border-radius: 3px;\n  width: 35px;\n  height: 40px;\n  border: none;\n  margin: -5px;\n  cursor: pointer;\n}\n\n.units {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.us-units,\n.metric-units {\n  background-color: var(--floralwhite);\n  color: #444;\n  border: none;\n  font-size: 18px;\n  padding: 5px 10px;\n  margin: 0 10px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n\n.current-weather {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 15px 0;\n}\n\n.location {\n  width: 100%;\n  margin-top: 10px;\n  font-size: 32px;\n}\n\n.time {\n  color: var(--lightwhite);\n}\n\n.current-temp {\n  font-size: 78px;\n  margin: 15px 0;\n}\n\n.text {\n  font-size: 24px;\n}\n\n.feels-like {\n  font-size: 20px;\n  color: var(--lightwhite);\n}\n\n.weather-details {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 75px);\n  margin: 10px 0;\n}\n\n.weather-details div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-details div:last-child {\n  font-size: 20px;\n  color: var(--floralwhite);\n}\n\n.weather-details div:first-child {\n  padding-bottom: 15px;\n  font-size: 16px;\n  color: var(--lightwhite);\n}\n\n#moon-phase {\n  font-size: 32px;\n  margin-top: -12px;\n}\n\n.forecast > div {\n  border-bottom: 2px solid var(--lightWhite);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  justify-items: center;\n  gap: 5px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n\n.forecast > div > div {\n  padding-bottom: 10px;\n}\n\n.forecast > div > div:first-child {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  align-self: center;\n}\n\n.forecast > div > div:last-child {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  align-self: center;\n  font-size: 36px;\n}\n\n.forecast > div:last-child {\n  border: none;\n}\n\n.forecast {\n  width: 100%;\n  padding: 25px;\n}\n\n.footer {\n  width: 100%;\n  font-size: 14px;\n  color: var(--lightwhite);\n  margin: 25px 0;\n}\n\n.footer div {\n  display: inline;\n}\n\n.footer a {\n  color: var(--floralwhite);\n  text-decoration: none;\n  cursor: pointer\n}\n\n.low-uv {\n  background-color: green;\n}\n\n.mid-uv {\n  background-color: orange;\n}\n\n.high-uv {\n  background-color: red;\n}\n\n.very-high-uv {\n  background-color: darkred;\n}\n\n\n.low-uv,\n.mid-uv,\n.high-uv,\n.very-high-uv {\n  border-radius: 50%;\n  width: 35px;\n  padding: 5px;\n  margin-top: -8px;\n}\n\n.loading-spinner {\n  visibility: hidden;\n  position: fixed;\n  top: 40%;\n  border: 25px solid rgba(255, 255, 255, 0.25);\n  border-top: 25px solid var(--floralwhite);\n  border-radius: 50%;\n  width: 200px; \n  height: 200px;\n  animation: spin 0.5s linear infinite;\n}\n\n.loading-spinner.active {\n  visibility: visible;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-10px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(10px);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCachedWeatherData: () => (/* binding */ clearCachedWeatherData),
/* harmony export */   fetchLocationData: () => (/* binding */ fetchLocationData),
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dom_js__WEBPACK_IMPORTED_MODULE_0__]);
_dom_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

let weatherData = null;

async function fetchWeatherData(currentLocation) {
  if (!weatherData || weatherData.location !== currentLocation) {
    try {
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.searchContainerDiv.classList.remove('active');
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.add('active');
      
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=449114a6155e494f9e6101536232908&q=${currentLocation}&days=3`, { mode: 'cors' });
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.remove('active');
      const fetchedData = await response.json();
      weatherData = processWeatherData(fetchedData, currentLocation);
    } catch (error) {
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.searchContainerDiv.classList.add('active');
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.remove('active');

      throw error;
    }
  }
  return weatherData;
}

function clearCachedWeatherData() {
  weatherData = null;
}

function processWeatherData(data) {
  const { current, forecast, location } = data;
  const [forecast1, forecast2, forecast3] = forecast.forecastday;
  const [day1, day2, day3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.day);
  const [astro1, astro2, astro3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.astro);
  
  return {
    current,
    forecast,
    location,
    forecast1,
    forecast2,
    forecast3,
    day1,
    day2,
    day3,
    astro1,
    astro2,
    astro3,
  };
}

async function fetchLocationData() {
  try {
    const response = await fetch('https:ipinfo.io?token=ec805ac28773d3', { mode: 'cors' });
    const fetchedData = await response.json();
    return fetchedData.city;
  } catch(error) {
    throw error;
  }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   loadingSpinner: () => (/* binding */ loadingSpinner),
/* harmony export */   searchContainerDiv: () => (/* binding */ searchContainerDiv)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_js__WEBPACK_IMPORTED_MODULE_0__]);
_data_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




let units = 'Metric';
let currentLocation = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchLocationData)();

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';
logoDiv.textContent = 'WeatherApp';

const searchContainerDiv = document.createElement('div');
searchContainerDiv.className = 'search-container';

const searchInput = document.createElement('input');

searchInput.type = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'Search...';

const searchButton = document.createElement('button');
searchButton.className = 'submit';
searchButton.textContent = '🔍';

searchContainerDiv.appendChild(searchInput);
searchContainerDiv.appendChild(searchButton);

const unitsDiv = document.createElement('div');
unitsDiv.className = 'units';

const metricUnitsButton = document.createElement('button');
metricUnitsButton.className = 'metric-units';
metricUnitsButton.textContent = '°C, m/s';

const usUnitsButton = document.createElement('button');
usUnitsButton.className = 'us-units';
usUnitsButton.textContent = '°F, mph';

unitsDiv.appendChild(metricUnitsButton);
unitsDiv.appendChild(usUnitsButton);

const currentWeatherDiv = document.createElement('div');
currentWeatherDiv.className = 'current-weather';

const locationDiv = document.createElement('div');
locationDiv.className = 'location';

const timeDiv = document.createElement('div');
timeDiv.className = 'time';

const currentTempDiv = document.createElement('div');
currentTempDiv.className = 'current-temp';

const textDiv = document.createElement('div');
textDiv.className = 'text';

const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.className = 'feels-like';



currentWeatherDiv.appendChild(locationDiv);
currentWeatherDiv.appendChild(timeDiv);
currentWeatherDiv.appendChild(currentTempDiv);
currentWeatherDiv.appendChild(textDiv);
currentWeatherDiv.appendChild(feelsLikeDiv);

const weatherDetailsDiv = document.createElement('div');

weatherDetailsDiv.className = 'weather-details';

const windDiv = document.createElement('div');
windDiv.className = 'wind';
const windTitle = document.createElement('div');
windTitle.textContent = 'Wind';
const windValue = document.createElement('div');
windDiv.appendChild(windTitle);
windDiv.appendChild(windValue);

const humidityDiv = document.createElement('div');
const humidityTitle = document.createElement('div');
humidityTitle.textContent = 'Humidity';
const humidityValue = document.createElement('div');

humidityDiv.appendChild(humidityTitle);
humidityDiv.appendChild(humidityValue);

const uvIndexDiv = document.createElement('div');
const uvIndexTitle = document.createElement('div');
uvIndexTitle.textContent = 'UV index';
const uvIndexValue = document.createElement('div');

uvIndexDiv.appendChild(uvIndexTitle);
uvIndexDiv.appendChild(uvIndexValue);

const visibilityDiv = document.createElement('div');
const visibilityTitle = document.createElement('div');
visibilityTitle.textContent = 'Visibility';
const visibilityValue = document.createElement('div');
visibilityDiv.appendChild(visibilityTitle);
visibilityDiv.appendChild(visibilityValue);

const cloudinessDiv = document.createElement('div');
const cloudinessTitle = document.createElement('div');
cloudinessTitle.textContent = 'Cloudiness';
const cloudinessValue = document.createElement('div');
cloudinessDiv.appendChild(cloudinessTitle);
cloudinessDiv.appendChild(cloudinessValue);

const chanceOfRainDiv = document.createElement('div');
const chanceOfRainTitle = document.createElement('div');
chanceOfRainTitle.textContent = 'Chance of rain';
const chanceOfRainValue = document.createElement('div');
chanceOfRainDiv.appendChild(chanceOfRainTitle);
chanceOfRainDiv.appendChild(chanceOfRainValue);

const sunriseDiv = document.createElement('div');
const sunriseTitle = document.createElement('div');
sunriseTitle.textContent = 'Sunrise';
const sunriseValue = document.createElement('div');
sunriseDiv.appendChild(sunriseTitle);
sunriseDiv.appendChild(sunriseValue);

const sunsetDiv = document.createElement('div');
const sunsetTitle = document.createElement('div');
sunsetTitle.textContent = 'Sunset';
const sunsetValue = document.createElement('div');
sunsetDiv.appendChild(sunsetTitle);
sunsetDiv.appendChild(sunsetValue);

const moonPhaseDiv = document.createElement('div');
const moonPhaseTitle = document.createElement('div');
moonPhaseTitle.textContent = 'Moon phase';
const moonPhaseValue = document.createElement('div');
moonPhaseValue.id = 'moon-phase';
moonPhaseDiv.appendChild(moonPhaseTitle);
moonPhaseDiv.appendChild(moonPhaseValue);

weatherDetailsDiv.appendChild(windDiv);
weatherDetailsDiv.appendChild(humidityDiv);
weatherDetailsDiv.appendChild(uvIndexDiv);
weatherDetailsDiv.appendChild(visibilityDiv);
weatherDetailsDiv.appendChild(cloudinessDiv);
weatherDetailsDiv.appendChild(chanceOfRainDiv);
weatherDetailsDiv.appendChild(moonPhaseDiv);
weatherDetailsDiv.appendChild(sunriseDiv);
weatherDetailsDiv.appendChild(sunsetDiv);

document.body.appendChild(weatherDetailsDiv);

const forecastDiv = document.createElement('div');
forecastDiv.className = 'forecast';

const day1Div = document.createElement('div');

const day1NameDiv = document.createElement('div');

const day1MaxTempDiv = document.createElement('div');

const day1MinTempDiv = document.createElement('div');

const day1IconDiv = document.createElement('div');

day1Div.appendChild(day1NameDiv);
day1Div.appendChild(day1MaxTempDiv);
day1Div.appendChild(day1MinTempDiv);
day1Div.appendChild(day1IconDiv);

const day2Div = document.createElement('div');

const day2NameDiv = document.createElement('div');

const day2MaxTempDiv = document.createElement('div');

const day2MinTempDiv = document.createElement('div');

const day2IconDiv = document.createElement('div');

day2Div.appendChild(day2NameDiv);
day2Div.appendChild(day2MaxTempDiv);
day2Div.appendChild(day2MinTempDiv);
day2Div.appendChild(day2IconDiv);

const day3Div = document.createElement('div');

const day3NameDiv = document.createElement('div');

const day3MaxTempDiv = document.createElement('div');

const day3MinTempDiv = document.createElement('div');

const day3IconDiv = document.createElement('div');

day3Div.appendChild(day3NameDiv);
day3Div.appendChild(day3MaxTempDiv);
day3Div.appendChild(day3MinTempDiv);
day3Div.appendChild(day3IconDiv);

forecastDiv.appendChild(day1Div);
forecastDiv.appendChild(day2Div);
forecastDiv.appendChild(day3Div);

const footerDiv = document.createElement('div');
footerDiv.className = 'footer';

const usernameLink = document.createElement('a');
usernameLink.href = 'https://github.com/laythalqadhi/';
usernameLink.textContent = 'LaythAlqadhi';

const sourceCodeLink = document.createElement('a');
sourceCodeLink.href = 'https://github.com/Username/weather-app';
sourceCodeLink.textContent = 'Source code';

const separatorDiv = document.createElement('div');
separatorDiv.textContent = ' | ';

footerDiv.textContent = 'Built by ';
footerDiv.appendChild(usernameLink);
footerDiv.appendChild(separatorDiv);
footerDiv.appendChild(sourceCodeLink);

const loadingSpinner = document.createElement('div');
loadingSpinner.className = 'loading-spinner';

document.body.appendChild(logoDiv);
document.body.appendChild(searchContainerDiv);
document.body.appendChild(unitsDiv);
document.body.appendChild(currentWeatherDiv);
document.body.appendChild(weatherDetailsDiv);
document.body.appendChild(forecastDiv);
document.body.appendChild(footerDiv);
document.body.appendChild(loadingSpinner);

async function createContent(givenLocation) {
  if (givenLocation) {
    currentLocation = givenLocation;
  }

  let weather = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(currentLocation);
  
  const currentDayCode = weather.current.condition.code;
  const day1Code = weather.day1.condition.code;
  const day2Code = weather.day2.condition.code;
  const day3Code = weather.day3.condition.code;

  (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.nightMode)(weather.astro1.sunset, weather.astro1.sunrise);

  appendData(locationDiv, `${weather.location.name}, ${weather.location.country}`);
  appendData(textDiv, weather.current.condition.text);
  appendData(timeDiv, weather.location.localtime);
  appendData(currentTempDiv, `${(0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(currentDayCode)} ${weather.current.temp_c}°C`);
  appendData(feelsLikeDiv, `${weather.current.feelslike_c}°C`);
  appendData(windValue, `${weather.current.wind_kph}kph`);
  appendData(humidityValue, `${weather.current.humidity}%`);
  appendData(uvIndexValue, weather.current.uv);
  appendData(visibilityValue, `${weather.current.vis_km}km`);
  appendData(cloudinessValue, `${weather.current.cloud}%`);
  appendData(chanceOfRainValue, `${weather.current.precip_in}%`);
  appendData(sunriseValue, weather.astro1.sunrise);
  appendData(sunsetValue, weather.astro1.sunset);
  appendData(moonPhaseValue, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getMoonIcon)(weather.astro1.moon_phase));
  appendData(day1MaxTempDiv, `${weather.day1.maxtemp_c}°C`);
  appendData(day2MaxTempDiv, `${weather.day2.maxtemp_c}°C`);
  appendData(day3MaxTempDiv, `${weather.day3.maxtemp_c}°C`);
  appendData(day1MinTempDiv, `${weather.day1.mintemp_c}°C`);
  appendData(day2MinTempDiv, `${weather.day2.mintemp_c}°C`);
  appendData(day3MinTempDiv, `${weather.day3.mintemp_c}°C`);
  appendData(day1NameDiv, getDayNameFromDate(weather.forecast1.date));
  appendData(day2NameDiv, getDayNameFromDate(weather.forecast2.date));
  appendData(day3NameDiv, getDayNameFromDate(weather.forecast3.date));
  appendData(day1IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day1Code));
  appendData(day2IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day2Code));
  appendData(day3IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day3Code));

  if (units === 'US') {
    appendData(currentTempDiv, `${(0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day1Code, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getMoonIcon)(weather.astro1.moon_phase))} ${weather.current.temp_f}°F`);
    appendData(feelsLikeDiv, `${weather.current.feelslike_f}°F`);
    appendData(windValue, `${weather.current.wind_mph}mph`);
    appendData(visibilityValue, `${weather.current.vis_miles}miles`);
    appendData(day1MaxTempDiv, `${weather.day1.maxtemp_f}°F`);
    appendData(day2MaxTempDiv, `${weather.day2.maxtemp_f}°F`);
    appendData(day3MaxTempDiv, `${weather.day3.maxtemp_f}°F`);
    appendData(day1MinTempDiv, `${weather.day1.mintemp_f}°F`);
    appendData(day2MinTempDiv, `${weather.day2.mintemp_f}°F`);
    appendData(day3MinTempDiv, `${weather.day3.mintemp_f}°F`);
  }

  if (uvIndexValue.textContent < 3) {
    uvIndexValue.classList = 'low-uv';
  } else if (uvIndexValue.textContent < 6) {
    uvIndexValue.classList = 'mid-uv';
  } else if (uvIndexValue.textContent < 8) {
    uvIndexValue.classList = 'high-uv';
  } else if (uvIndexValue.textContent >= 8) {
    uvIndexValue.classList = 'very-high-uv';
  }
}
createContent();

searchButton.addEventListener('click', () => {
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.clearCachedWeatherData)();
  createContent(searchInput.value);
  searchInput.value = '';
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});

usUnitsButton.addEventListener('click', () => {
  units = 'US';
  createContent();
});

metricUnitsButton.addEventListener('click', () => {
  units = 'Metric';
  createContent();
});

function appendData(element, dataLocation) {
  let data = dataLocation;
  element.textContent = data;
}

function getDayNameFromDate(date) {
  const options = { weekday: 'long' };

  const dayName = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  return dayName;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIcon: () => (/* binding */ getIcon),
/* harmony export */   getMoonIcon: () => (/* binding */ getMoonIcon),
/* harmony export */   nightMode: () => (/* binding */ nightMode)
/* harmony export */ });
const iconMapping = {
    1000: "☀️",
    1003: "🌤️",
    1006: "☁️",
    1009: "🌫️",
    1030: "🌫️",
    1063: "🌦️",
    1066: "🌨️",
    1069: "🌧️",
    1072: "🌧️",
    1087: "⛈️",
    1114: "🌨️",
    1117: "🌨️",
    1135: "🌫️",
    1147: "🌫️",
    1150: "🌧️",
    1153: "🌧️",
    1168: "🌧️",
    1171: "🌧️",
    1180: "🌧️",
    1183: "🌧️",
    1186: "🌧️",
    1189: "🌧️",
    1192: "🌧️",
    1195: "🌧️",
    1198: "🌧️",
    1201: "🌧️",
    1204: "🌨️",
    1207: "🌨️",
    1210: "🌨️",
    1213: "🌨️",
    1216: "🌨️",
    1219: "🌨️",
    1222: "🌨️",
    1225: "🌨️",
    1237: "🌨️",
    1240: "🌧️",
    1243: "🌧️",
    1246: "🌧️",
    1249: "🌨️",
    1252: "🌨️",
    1255: "🌨️",
    1258: "🌨️",
    1261: "🌨️",
    1264: "🌨️",
    1273: "⛈️",
    1276: "⛈️",
    1279: "🌨️",
    1282: "🌨️",
};

const moonIcons = {
  'Waning Gibbous': '🌖',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Last Quarter': '🌗',
  'First Quarter': '🌓',
  'New Moon': '🌑',
  'Waning Crescent': '🌘',
  'Waxing Crescent': '🌒',
};

function getMoonIcon(type) {
  return moonIcons[type] || '🌕';
}

function getIcon(code) {
  return iconMapping[code];
}

function nightMode(sunsetTime, sunriseTime) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const currentTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;

  const parseTime = (timeStr) => {
    const match = timeStr.match(/(\d+):(\d+) (AM|PM)/i);
    if (match) {
      let hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours !== 12) {
        hours += 12;
      } else if (ampm === 'AM' && hours === 12) {
        hours = 0;
      }
      return { hours, minutes };
    }
    return null;
  };

  const sunsetParts = parseTime(sunsetTime);
  const sunriseParts = parseTime(sunriseTime);

  if (sunsetParts && sunriseParts) {
    const { hours: sunsetHour, minutes: sunsetMinute } = sunsetParts;
    const { hours: sunriseHour, minutes: sunriseMinute } = sunriseParts;

    const isNight =
      (hours > sunsetHour || (hours === sunsetHour && minutes >= sunsetMinute)) ||
      (hours < sunriseHour || (hours === sunriseHour && minutes < sunriseMinute));
    iconMapping[1000] = isNight ? '🌕' : '☀️';
    document.body.style.background = isNight ? 'var(--nightmode)' : 'var(--daymode)';
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwyQ0FBMkM7QUFDdkQsWUFBWSw2Q0FBNkM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgLS1saWdodHdoaXRlOiByZ2IoMjU1LDI1NSwyNTUsIDc1JSk7XG4gIC0tZmxvcmFsd2hpdGU6IGZsb3JhbHdoaXRlO1xuICAtLW5pZ2h0bW9kZTogbGluZWFyLWdyYWRpZW50KHJnYigwLCAwLCAwKSwgcmdiKDE3LCAxNywgMCksIHJnYig1MSwgMzQsIDApKTtcbiAgLS1kYXltb2RlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsIDE1MywgMjU1KSwgcmdiKDAsIDEwMiwgMTUzKSwgcmdiKDAsIDUxLCAxMDIpKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwaHY7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xuICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cblxuI3NlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogLTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51cy11bml0cyxcbi5tZXRyaWMtdW5pdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uY3VycmVudC13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4ubG9jYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodHdoaXRlKTtcbn1cblxuLmN1cnJlbnQtdGVtcCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmVlbHMtbGlrZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0d2hpdGUpO1xufVxuXG4ud2VhdGhlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDc1cHgpO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLndlYXRoZXItZGV0YWlscyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VhdGhlci1kZXRhaWxzIGRpdjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xufVxuXG4ud2VhdGhlci1kZXRhaWxzIGRpdjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodHdoaXRlKTtcbn1cblxuI21vb24tcGhhc2Uge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuXG4uZm9yZWNhc3QgPiBkaXYge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHRXaGl0ZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9yZWNhc3QgPiBkaXYgPiBkaXYge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcmVjYXN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZm9yZWNhc3QgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uZm9yZWNhc3QgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZvcmVjYXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4uZm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZvb3RlciBhIHtcbiAgY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmxvdy11diB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubWlkLXV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uaGlnaC11diB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnZlcnktaGlnaC11diB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5cblxuLmxvdy11dixcbi5taWQtdXYsXG4uaGlnaC11dixcbi52ZXJ5LWhpZ2gtdXYge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MCU7XG4gIGJvcmRlcjogMjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHZhcigtLWZsb3JhbHdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7IFxuICBoZWlnaHQ6IDIwMHB4O1xuICBhbmltYXRpb246IHNwaW4gMC41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIuYWN0aXZlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsMEVBQTBFO0VBQzFFLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQTs7OztFQUlFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLDRDQUE0QztFQUM1Qyx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1JmRpc3BsYXk9c3dhcCcpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodHdoaXRlOiByZ2IoMjU1LDI1NSwyNTUsIDc1JSk7XFxuICAtLWZsb3JhbHdoaXRlOiBmbG9yYWx3aGl0ZTtcXG4gIC0tbmlnaHRtb2RlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsIDAsIDApLCByZ2IoMTcsIDE3LCAwKSwgcmdiKDUxLCAzNCwgMCkpO1xcbiAgLS1kYXltb2RlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsIDE1MywgMjU1KSwgcmdiKDAsIDEwMiwgMTUzKSwgcmdiKDAsIDUxLCAxMDIpKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwaHY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcblxcbiNzZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IC01cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51cy11bml0cyxcXG4ubWV0cmljLXVuaXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4udGltZSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA3OHB4O1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbi50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmZlZWxzLWxpa2Uge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0d2hpdGUpO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA3NXB4KTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMgZGl2Omxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlscyBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XFxufVxcblxcbiNtb29uLXBoYXNlIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgPiBkaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0V2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgPiBkaXYgPiBkaXYge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0ID4gZGl2ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5mb3JlY2FzdCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodHdoaXRlKTtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4uZm9vdGVyIGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5sb3ctdXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5taWQtdXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uaGlnaC11diB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi52ZXJ5LWhpZ2gtdXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuXFxuLmxvdy11dixcXG4ubWlkLXV2LFxcbi5oaWdoLXV2LFxcbi52ZXJ5LWhpZ2gtdXYge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG5cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNDAlO1xcbiAgYm9yZGVyOiAyNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMDBweDsgXFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGluZy1zcGlubmVyLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG4gIH1cXG4gIDIwJSwgNDAlLCA2MCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxvYWRpbmdTcGlubmVyLCBzZWFyY2hDb250YWluZXJEaXYgfSBmcm9tICcuL2RvbS5qcydcbmxldCB3ZWF0aGVyRGF0YSA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGN1cnJlbnRMb2NhdGlvbikge1xuICBpZiAoIXdlYXRoZXJEYXRhIHx8IHdlYXRoZXJEYXRhLmxvY2F0aW9uICE9PSBjdXJyZW50TG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgc2VhcmNoQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTQ0OTExNGE2MTU1ZTQ5NGY5ZTYxMDE1MzYyMzI5MDgmcT0ke2N1cnJlbnRMb2NhdGlvbn0mZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgd2VhdGhlckRhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEoZmV0Y2hlZERhdGEsIGN1cnJlbnRMb2NhdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNlYXJjaENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDYWNoZWRXZWF0aGVyRGF0YSgpIHtcbiAgd2VhdGhlckRhdGEgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zdCB7IGN1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbiB9ID0gZGF0YTtcbiAgY29uc3QgW2ZvcmVjYXN0MSwgZm9yZWNhc3QyLCBmb3JlY2FzdDNdID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGNvbnN0IFtkYXkxLCBkYXkyLCBkYXkzXSA9IFtmb3JlY2FzdDEsIGZvcmVjYXN0MiwgZm9yZWNhc3QzXS5tYXAoKGZvcmVjYXN0KSA9PiBmb3JlY2FzdC5kYXkpO1xuICBjb25zdCBbYXN0cm8xLCBhc3RybzIsIGFzdHJvM10gPSBbZm9yZWNhc3QxLCBmb3JlY2FzdDIsIGZvcmVjYXN0M10ubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QuYXN0cm8pO1xuICBcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50LFxuICAgIGZvcmVjYXN0LFxuICAgIGxvY2F0aW9uLFxuICAgIGZvcmVjYXN0MSxcbiAgICBmb3JlY2FzdDIsXG4gICAgZm9yZWNhc3QzLFxuICAgIGRheTEsXG4gICAgZGF5MixcbiAgICBkYXkzLFxuICAgIGFzdHJvMSxcbiAgICBhc3RybzIsXG4gICAgYXN0cm8zLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hMb2NhdGlvbkRhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6aXBpbmZvLmlvP3Rva2VuPWVjODA1YWMyODc3M2QzJywgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGZldGNoZWREYXRhLmNpdHk7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgZmV0Y2hXZWF0aGVyRGF0YSxcbiAgY2xlYXJDYWNoZWRXZWF0aGVyRGF0YSxcbiAgZmV0Y2hMb2NhdGlvbkRhdGFcbn0gZnJvbSAnLi9kYXRhLmpzJztcbmltcG9ydCB7XG4gIGdldEljb24sXG4gIGdldE1vb25JY29uLFxuICBuaWdodE1vZGVcbn0gZnJvbSAnLi9zdHlsZS5qcyc7XG5pbXBvcnQge1xuICAgIFN0eWxlXG59IGZyb20gJy4vaW5kZXguY3NzJ1xuXG5sZXQgdW5pdHMgPSAnTWV0cmljJztcbmxldCBjdXJyZW50TG9jYXRpb24gPSBhd2FpdCBmZXRjaExvY2F0aW9uRGF0YSgpO1xuXG5jb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dvRGl2LmNsYXNzTmFtZSA9ICdsb2dvJztcbmxvZ29EaXYudGV4dENvbnRlbnQgPSAnV2VhdGhlckFwcCc7XG5cbmNvbnN0IHNlYXJjaENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdzZWFyY2gtY29udGFpbmVyJztcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5zZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCc7XG5zZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gnO1xuc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zZWFyY2hCdXR0b24uY2xhc3NOYW1lID0gJ3N1Ym1pdCc7XG5zZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAn8J+UjSc7XG5cbnNlYXJjaENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG5zZWFyY2hDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblxuY29uc3QgdW5pdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnVuaXRzRGl2LmNsYXNzTmFtZSA9ICd1bml0cyc7XG5cbmNvbnN0IG1ldHJpY1VuaXRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5tZXRyaWNVbml0c0J1dHRvbi5jbGFzc05hbWUgPSAnbWV0cmljLXVuaXRzJztcbm1ldHJpY1VuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gJ8KwQywgbS9zJztcblxuY29uc3QgdXNVbml0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xudXNVbml0c0J1dHRvbi5jbGFzc05hbWUgPSAndXMtdW5pdHMnO1xudXNVbml0c0J1dHRvbi50ZXh0Q29udGVudCA9ICfCsEYsIG1waCc7XG5cbnVuaXRzRGl2LmFwcGVuZENoaWxkKG1ldHJpY1VuaXRzQnV0dG9uKTtcbnVuaXRzRGl2LmFwcGVuZENoaWxkKHVzVW5pdHNCdXR0b24pO1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3VycmVudFdlYXRoZXJEaXYuY2xhc3NOYW1lID0gJ2N1cnJlbnQtd2VhdGhlcic7XG5cbmNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2NhdGlvbkRpdi5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuXG5jb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50aW1lRGl2LmNsYXNzTmFtZSA9ICd0aW1lJztcblxuY29uc3QgY3VycmVudFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmN1cnJlbnRUZW1wRGl2LmNsYXNzTmFtZSA9ICdjdXJyZW50LXRlbXAnO1xuXG5jb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZXh0RGl2LmNsYXNzTmFtZSA9ICd0ZXh0JztcblxuY29uc3QgZmVlbHNMaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mZWVsc0xpa2VEaXYuY2xhc3NOYW1lID0gJ2ZlZWxzLWxpa2UnO1xuXG5cblxuY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGltZURpdik7XG5jdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcERpdik7XG5jdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbmN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZURpdik7XG5cbmNvbnN0IHdlYXRoZXJEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbndlYXRoZXJEZXRhaWxzRGl2LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWRldGFpbHMnO1xuXG5jb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53aW5kRGl2LmNsYXNzTmFtZSA9ICd3aW5kJztcbmNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud2luZFRpdGxlLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuY29uc3Qgd2luZFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRUaXRsZSk7XG53aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRWYWx1ZSk7XG5cbmNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5odW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcbmNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XG5odW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVZhbHVlKTtcblxuY29uc3QgdXZJbmRleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdXZJbmRleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG51dkluZGV4VGl0bGUudGV4dENvbnRlbnQgPSAnVVYgaW5kZXgnO1xuY29uc3QgdXZJbmRleFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleFRpdGxlKTtcbnV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleFZhbHVlKTtcblxuY29uc3QgdmlzaWJpbGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdmlzaWJpbGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52aXNpYmlsaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnVmlzaWJpbGl0eSc7XG5jb25zdCB2aXNpYmlsaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnZpc2liaWxpdHlEaXYuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eVRpdGxlKTtcbnZpc2liaWxpdHlEaXYuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eVZhbHVlKTtcblxuY29uc3QgY2xvdWRpbmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY2xvdWRpbmVzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jbG91ZGluZXNzVGl0bGUudGV4dENvbnRlbnQgPSAnQ2xvdWRpbmVzcyc7XG5jb25zdCBjbG91ZGluZXNzVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNsb3VkaW5lc3NEaXYuYXBwZW5kQ2hpbGQoY2xvdWRpbmVzc1RpdGxlKTtcbmNsb3VkaW5lc3NEaXYuYXBwZW5kQ2hpbGQoY2xvdWRpbmVzc1ZhbHVlKTtcblxuY29uc3QgY2hhbmNlT2ZSYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjaGFuY2VPZlJhaW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2hhbmNlT2ZSYWluVGl0bGUudGV4dENvbnRlbnQgPSAnQ2hhbmNlIG9mIHJhaW4nO1xuY29uc3QgY2hhbmNlT2ZSYWluVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNoYW5jZU9mUmFpbkRpdi5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW5UaXRsZSk7XG5jaGFuY2VPZlJhaW5EaXYuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluVmFsdWUpO1xuXG5jb25zdCBzdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzdW5yaXNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1bnJpc2VUaXRsZS50ZXh0Q29udGVudCA9ICdTdW5yaXNlJztcbmNvbnN0IHN1bnJpc2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGl0bGUpO1xuc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVmFsdWUpO1xuXG5jb25zdCBzdW5zZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHN1bnNldFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdW5zZXRUaXRsZS50ZXh0Q29udGVudCA9ICdTdW5zZXQnO1xuY29uc3Qgc3Vuc2V0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRUaXRsZSk7XG5zdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VmFsdWUpO1xuXG5jb25zdCBtb29uUGhhc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vb25QaGFzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb29uUGhhc2VUaXRsZS50ZXh0Q29udGVudCA9ICdNb29uIHBoYXNlJztcbmNvbnN0IG1vb25QaGFzZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb29uUGhhc2VWYWx1ZS5pZCA9ICdtb29uLXBoYXNlJztcbm1vb25QaGFzZURpdi5hcHBlbmRDaGlsZChtb29uUGhhc2VUaXRsZSk7XG5tb29uUGhhc2VEaXYuYXBwZW5kQ2hpbGQobW9vblBoYXNlVmFsdWUpO1xuXG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHV2SW5kZXhEaXYpO1xud2VhdGhlckRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eURpdik7XG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChjbG91ZGluZXNzRGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKGNoYW5jZU9mUmFpbkRpdik7XG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChtb29uUGhhc2VEaXYpO1xud2VhdGhlckRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZURpdik7XG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChzdW5zZXREaXYpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzRGl2KTtcblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcmVjYXN0RGl2LmNsYXNzTmFtZSA9ICdmb3JlY2FzdCc7XG5cbmNvbnN0IGRheTFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5MU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5MU1heFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5MU1pblRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5MUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxTmFtZURpdik7XG5kYXkxRGl2LmFwcGVuZENoaWxkKGRheTFNYXhUZW1wRGl2KTtcbmRheTFEaXYuYXBwZW5kQ2hpbGQoZGF5MU1pblRlbXBEaXYpO1xuZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxSWNvbkRpdik7XG5cbmNvbnN0IGRheTJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5Mk5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5Mk1heFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5Mk1pblRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5Mkljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGF5MkRpdi5hcHBlbmRDaGlsZChkYXkyTmFtZURpdik7XG5kYXkyRGl2LmFwcGVuZENoaWxkKGRheTJNYXhUZW1wRGl2KTtcbmRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5Mk1pblRlbXBEaXYpO1xuZGF5MkRpdi5hcHBlbmRDaGlsZChkYXkySWNvbkRpdik7XG5cbmNvbnN0IGRheTNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5M05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5M01heFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5M01pblRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZGF5M0ljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGF5M0Rpdi5hcHBlbmRDaGlsZChkYXkzTmFtZURpdik7XG5kYXkzRGl2LmFwcGVuZENoaWxkKGRheTNNYXhUZW1wRGl2KTtcbmRheTNEaXYuYXBwZW5kQ2hpbGQoZGF5M01pblRlbXBEaXYpO1xuZGF5M0Rpdi5hcHBlbmRDaGlsZChkYXkzSWNvbkRpdik7XG5cbmZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRheTFEaXYpO1xuZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGF5MkRpdik7XG5mb3JlY2FzdERpdi5hcHBlbmRDaGlsZChkYXkzRGl2KTtcblxuY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXJEaXYuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG5cbmNvbnN0IHVzZXJuYW1lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbnVzZXJuYW1lTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9sYXl0aGFscWFkaGkvJztcbnVzZXJuYW1lTGluay50ZXh0Q29udGVudCA9ICdMYXl0aEFscWFkaGknO1xuXG5jb25zdCBzb3VyY2VDb2RlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbnNvdXJjZUNvZGVMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lL3dlYXRoZXItYXBwJztcbnNvdXJjZUNvZGVMaW5rLnRleHRDb250ZW50ID0gJ1NvdXJjZSBjb2RlJztcblxuY29uc3Qgc2VwYXJhdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXBhcmF0b3JEaXYudGV4dENvbnRlbnQgPSAnIHwgJztcblxuZm9vdGVyRGl2LnRleHRDb250ZW50ID0gJ0J1aWx0IGJ5ICc7XG5mb290ZXJEaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVMaW5rKTtcbmZvb3RlckRpdi5hcHBlbmRDaGlsZChzZXBhcmF0b3JEaXYpO1xuZm9vdGVyRGl2LmFwcGVuZENoaWxkKHNvdXJjZUNvZGVMaW5rKTtcblxuY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvYWRpbmdTcGlubmVyLmNsYXNzTmFtZSA9ICdsb2FkaW5nLXNwaW5uZXInO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXJEaXYpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1bml0c0Rpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNEaXYpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JlY2FzdERpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRpbmdTcGlubmVyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoZ2l2ZW5Mb2NhdGlvbikge1xuICBpZiAoZ2l2ZW5Mb2NhdGlvbikge1xuICAgIGN1cnJlbnRMb2NhdGlvbiA9IGdpdmVuTG9jYXRpb247XG4gIH1cblxuICBsZXQgd2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEoY3VycmVudExvY2F0aW9uKTtcbiAgXG4gIGNvbnN0IGN1cnJlbnREYXlDb2RlID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi5jb2RlO1xuICBjb25zdCBkYXkxQ29kZSA9IHdlYXRoZXIuZGF5MS5jb25kaXRpb24uY29kZTtcbiAgY29uc3QgZGF5MkNvZGUgPSB3ZWF0aGVyLmRheTIuY29uZGl0aW9uLmNvZGU7XG4gIGNvbnN0IGRheTNDb2RlID0gd2VhdGhlci5kYXkzLmNvbmRpdGlvbi5jb2RlO1xuXG4gIG5pZ2h0TW9kZSh3ZWF0aGVyLmFzdHJvMS5zdW5zZXQsIHdlYXRoZXIuYXN0cm8xLnN1bnJpc2UpO1xuXG4gIGFwcGVuZERhdGEobG9jYXRpb25EaXYsIGAke3dlYXRoZXIubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlci5sb2NhdGlvbi5jb3VudHJ5fWApO1xuICBhcHBlbmREYXRhKHRleHREaXYsIHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gIGFwcGVuZERhdGEodGltZURpdiwgd2VhdGhlci5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBhcHBlbmREYXRhKGN1cnJlbnRUZW1wRGl2LCBgJHtnZXRJY29uKGN1cnJlbnREYXlDb2RlKX0gJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGZlZWxzTGlrZURpdiwgYCR7d2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKHdpbmRWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LndpbmRfa3BofWtwaGApO1xuICBhcHBlbmREYXRhKGh1bWlkaXR5VmFsdWUsIGAke3dlYXRoZXIuY3VycmVudC5odW1pZGl0eX0lYCk7XG4gIGFwcGVuZERhdGEodXZJbmRleFZhbHVlLCB3ZWF0aGVyLmN1cnJlbnQudXYpO1xuICBhcHBlbmREYXRhKHZpc2liaWxpdHlWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LnZpc19rbX1rbWApO1xuICBhcHBlbmREYXRhKGNsb3VkaW5lc3NWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LmNsb3VkfSVgKTtcbiAgYXBwZW5kRGF0YShjaGFuY2VPZlJhaW5WYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LnByZWNpcF9pbn0lYCk7XG4gIGFwcGVuZERhdGEoc3VucmlzZVZhbHVlLCB3ZWF0aGVyLmFzdHJvMS5zdW5yaXNlKTtcbiAgYXBwZW5kRGF0YShzdW5zZXRWYWx1ZSwgd2VhdGhlci5hc3RybzEuc3Vuc2V0KTtcbiAgYXBwZW5kRGF0YShtb29uUGhhc2VWYWx1ZSwgZ2V0TW9vbkljb24od2VhdGhlci5hc3RybzEubW9vbl9waGFzZSkpO1xuICBhcHBlbmREYXRhKGRheTFNYXhUZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTEubWF4dGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTJNYXhUZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTIubWF4dGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTNNYXhUZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTMubWF4dGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTFNaW5UZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTEubWludGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTJNaW5UZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTIubWludGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTNNaW5UZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTMubWludGVtcF9jfcKwQ2ApO1xuICBhcHBlbmREYXRhKGRheTFOYW1lRGl2LCBnZXREYXlOYW1lRnJvbURhdGUod2VhdGhlci5mb3JlY2FzdDEuZGF0ZSkpO1xuICBhcHBlbmREYXRhKGRheTJOYW1lRGl2LCBnZXREYXlOYW1lRnJvbURhdGUod2VhdGhlci5mb3JlY2FzdDIuZGF0ZSkpO1xuICBhcHBlbmREYXRhKGRheTNOYW1lRGl2LCBnZXREYXlOYW1lRnJvbURhdGUod2VhdGhlci5mb3JlY2FzdDMuZGF0ZSkpO1xuICBhcHBlbmREYXRhKGRheTFJY29uRGl2LCBnZXRJY29uKGRheTFDb2RlKSk7XG4gIGFwcGVuZERhdGEoZGF5Mkljb25EaXYsIGdldEljb24oZGF5MkNvZGUpKTtcbiAgYXBwZW5kRGF0YShkYXkzSWNvbkRpdiwgZ2V0SWNvbihkYXkzQ29kZSkpO1xuXG4gIGlmICh1bml0cyA9PT0gJ1VTJykge1xuICAgIGFwcGVuZERhdGEoY3VycmVudFRlbXBEaXYsIGAke2dldEljb24oZGF5MUNvZGUsIGdldE1vb25JY29uKHdlYXRoZXIuYXN0cm8xLm1vb25fcGhhc2UpKX0gJHt3ZWF0aGVyLmN1cnJlbnQudGVtcF9mfcKwRmApO1xuICAgIGFwcGVuZERhdGEoZmVlbHNMaWtlRGl2LCBgJHt3ZWF0aGVyLmN1cnJlbnQuZmVlbHNsaWtlX2Z9wrBGYCk7XG4gICAgYXBwZW5kRGF0YSh3aW5kVmFsdWUsIGAke3dlYXRoZXIuY3VycmVudC53aW5kX21waH1tcGhgKTtcbiAgICBhcHBlbmREYXRhKHZpc2liaWxpdHlWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LnZpc19taWxlc31taWxlc2ApO1xuICAgIGFwcGVuZERhdGEoZGF5MU1heFRlbXBEaXYsIGAke3dlYXRoZXIuZGF5MS5tYXh0ZW1wX2Z9wrBGYCk7XG4gICAgYXBwZW5kRGF0YShkYXkyTWF4VGVtcERpdiwgYCR7d2VhdGhlci5kYXkyLm1heHRlbXBfZn3CsEZgKTtcbiAgICBhcHBlbmREYXRhKGRheTNNYXhUZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTMubWF4dGVtcF9mfcKwRmApO1xuICAgIGFwcGVuZERhdGEoZGF5MU1pblRlbXBEaXYsIGAke3dlYXRoZXIuZGF5MS5taW50ZW1wX2Z9wrBGYCk7XG4gICAgYXBwZW5kRGF0YShkYXkyTWluVGVtcERpdiwgYCR7d2VhdGhlci5kYXkyLm1pbnRlbXBfZn3CsEZgKTtcbiAgICBhcHBlbmREYXRhKGRheTNNaW5UZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTMubWludGVtcF9mfcKwRmApO1xuICB9XG5cbiAgaWYgKHV2SW5kZXhWYWx1ZS50ZXh0Q29udGVudCA8IDMpIHtcbiAgICB1dkluZGV4VmFsdWUuY2xhc3NMaXN0ID0gJ2xvdy11dic7XG4gIH0gZWxzZSBpZiAodXZJbmRleFZhbHVlLnRleHRDb250ZW50IDwgNikge1xuICAgIHV2SW5kZXhWYWx1ZS5jbGFzc0xpc3QgPSAnbWlkLXV2JztcbiAgfSBlbHNlIGlmICh1dkluZGV4VmFsdWUudGV4dENvbnRlbnQgPCA4KSB7XG4gICAgdXZJbmRleFZhbHVlLmNsYXNzTGlzdCA9ICdoaWdoLXV2JztcbiAgfSBlbHNlIGlmICh1dkluZGV4VmFsdWUudGV4dENvbnRlbnQgPj0gOCkge1xuICAgIHV2SW5kZXhWYWx1ZS5jbGFzc0xpc3QgPSAndmVyeS1oaWdoLXV2JztcbiAgfVxufVxuY3JlYXRlQ29udGVudCgpO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsZWFyQ2FjaGVkV2VhdGhlckRhdGEoKTtcbiAgY3JlYXRlQ29udGVudChzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG59KTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBzZWFyY2hCdXR0b24uY2xpY2soKTtcbiAgfVxufSk7XG5cbnVzVW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHVuaXRzID0gJ1VTJztcbiAgY3JlYXRlQ29udGVudCgpO1xufSk7XG5cbm1ldHJpY1VuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB1bml0cyA9ICdNZXRyaWMnO1xuICBjcmVhdGVDb250ZW50KCk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kRGF0YShlbGVtZW50LCBkYXRhTG9jYXRpb24pIHtcbiAgbGV0IGRhdGEgPSBkYXRhTG9jYXRpb247XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXREYXlOYW1lRnJvbURhdGUoZGF0ZSkge1xuICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycgfTtcblxuICBjb25zdCBkYXlOYW1lID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgb3B0aW9ucykuZm9ybWF0KG5ldyBEYXRlKGRhdGUpKTtcbiAgcmV0dXJuIGRheU5hbWU7XG59XG5cbmV4cG9ydCB7IGxvYWRpbmdTcGlubmVyLCBzZWFyY2hDb250YWluZXJEaXYgfTsiLCJjb25zdCBpY29uTWFwcGluZyA9IHtcbiAgICAxMDAwOiBcIuKYgO+4j1wiLFxuICAgIDEwMDM6IFwi8J+MpO+4j1wiLFxuICAgIDEwMDY6IFwi4piB77iPXCIsXG4gICAgMTAwOTogXCLwn4yr77iPXCIsXG4gICAgMTAzMDogXCLwn4yr77iPXCIsXG4gICAgMTA2MzogXCLwn4ym77iPXCIsXG4gICAgMTA2NjogXCLwn4yo77iPXCIsXG4gICAgMTA2OTogXCLwn4yn77iPXCIsXG4gICAgMTA3MjogXCLwn4yn77iPXCIsXG4gICAgMTA4NzogXCLim4jvuI9cIixcbiAgICAxMTE0OiBcIvCfjKjvuI9cIixcbiAgICAxMTE3OiBcIvCfjKjvuI9cIixcbiAgICAxMTM1OiBcIvCfjKvvuI9cIixcbiAgICAxMTQ3OiBcIvCfjKvvuI9cIixcbiAgICAxMTUwOiBcIvCfjKfvuI9cIixcbiAgICAxMTUzOiBcIvCfjKfvuI9cIixcbiAgICAxMTY4OiBcIvCfjKfvuI9cIixcbiAgICAxMTcxOiBcIvCfjKfvuI9cIixcbiAgICAxMTgwOiBcIvCfjKfvuI9cIixcbiAgICAxMTgzOiBcIvCfjKfvuI9cIixcbiAgICAxMTg2OiBcIvCfjKfvuI9cIixcbiAgICAxMTg5OiBcIvCfjKfvuI9cIixcbiAgICAxMTkyOiBcIvCfjKfvuI9cIixcbiAgICAxMTk1OiBcIvCfjKfvuI9cIixcbiAgICAxMTk4OiBcIvCfjKfvuI9cIixcbiAgICAxMjAxOiBcIvCfjKfvuI9cIixcbiAgICAxMjA0OiBcIvCfjKjvuI9cIixcbiAgICAxMjA3OiBcIvCfjKjvuI9cIixcbiAgICAxMjEwOiBcIvCfjKjvuI9cIixcbiAgICAxMjEzOiBcIvCfjKjvuI9cIixcbiAgICAxMjE2OiBcIvCfjKjvuI9cIixcbiAgICAxMjE5OiBcIvCfjKjvuI9cIixcbiAgICAxMjIyOiBcIvCfjKjvuI9cIixcbiAgICAxMjI1OiBcIvCfjKjvuI9cIixcbiAgICAxMjM3OiBcIvCfjKjvuI9cIixcbiAgICAxMjQwOiBcIvCfjKfvuI9cIixcbiAgICAxMjQzOiBcIvCfjKfvuI9cIixcbiAgICAxMjQ2OiBcIvCfjKfvuI9cIixcbiAgICAxMjQ5OiBcIvCfjKjvuI9cIixcbiAgICAxMjUyOiBcIvCfjKjvuI9cIixcbiAgICAxMjU1OiBcIvCfjKjvuI9cIixcbiAgICAxMjU4OiBcIvCfjKjvuI9cIixcbiAgICAxMjYxOiBcIvCfjKjvuI9cIixcbiAgICAxMjY0OiBcIvCfjKjvuI9cIixcbiAgICAxMjczOiBcIuKbiO+4j1wiLFxuICAgIDEyNzY6IFwi4puI77iPXCIsXG4gICAgMTI3OTogXCLwn4yo77iPXCIsXG4gICAgMTI4MjogXCLwn4yo77iPXCIsXG59O1xuXG5jb25zdCBtb29uSWNvbnMgPSB7XG4gICdXYW5pbmcgR2liYm91cyc6ICfwn4yWJyxcbiAgJ1dheGluZyBHaWJib3VzJzogJ/CfjJQnLFxuICAnRnVsbCBNb29uJzogJ/CfjJUnLFxuICAnTGFzdCBRdWFydGVyJzogJ/CfjJcnLFxuICAnRmlyc3QgUXVhcnRlcic6ICfwn4yTJyxcbiAgJ05ldyBNb29uJzogJ/CfjJEnLFxuICAnV2FuaW5nIENyZXNjZW50JzogJ/CfjJgnLFxuICAnV2F4aW5nIENyZXNjZW50JzogJ/CfjJInLFxufTtcblxuZnVuY3Rpb24gZ2V0TW9vbkljb24odHlwZSkge1xuICByZXR1cm4gbW9vbkljb25zW3R5cGVdIHx8ICfwn4yVJztcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihjb2RlKSB7XG4gIHJldHVybiBpY29uTWFwcGluZ1tjb2RlXTtcbn1cblxuZnVuY3Rpb24gbmlnaHRNb2RlKHN1bnNldFRpbWUsIHN1bnJpc2VUaW1lKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZEhvdXJzID0gaG91cnMgJSAxMiB8fCAxMjtcbiAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cbiAgY29uc3QgY3VycmVudFRpbWUgPSBgJHtTdHJpbmcoZm9ybWF0dGVkSG91cnMpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJyl9ICR7YW1wbX1gO1xuXG4gIGNvbnN0IHBhcnNlVGltZSA9ICh0aW1lU3RyKSA9PiB7XG4gICAgY29uc3QgbWF0Y2ggPSB0aW1lU3RyLm1hdGNoKC8oXFxkKyk6KFxcZCspIChBTXxQTSkvaSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBsZXQgaG91cnMgPSBwYXJzZUludChtYXRjaFsxXSk7XG4gICAgICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hbMl0pO1xuICAgICAgY29uc3QgYW1wbSA9IG1hdGNoWzNdLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZiAoYW1wbSA9PT0gJ1BNJyAmJiBob3VycyAhPT0gMTIpIHtcbiAgICAgICAgaG91cnMgKz0gMTI7XG4gICAgICB9IGVsc2UgaWYgKGFtcG0gPT09ICdBTScgJiYgaG91cnMgPT09IDEyKSB7XG4gICAgICAgIGhvdXJzID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGhvdXJzLCBtaW51dGVzIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHN1bnNldFBhcnRzID0gcGFyc2VUaW1lKHN1bnNldFRpbWUpO1xuICBjb25zdCBzdW5yaXNlUGFydHMgPSBwYXJzZVRpbWUoc3VucmlzZVRpbWUpO1xuXG4gIGlmIChzdW5zZXRQYXJ0cyAmJiBzdW5yaXNlUGFydHMpIHtcbiAgICBjb25zdCB7IGhvdXJzOiBzdW5zZXRIb3VyLCBtaW51dGVzOiBzdW5zZXRNaW51dGUgfSA9IHN1bnNldFBhcnRzO1xuICAgIGNvbnN0IHsgaG91cnM6IHN1bnJpc2VIb3VyLCBtaW51dGVzOiBzdW5yaXNlTWludXRlIH0gPSBzdW5yaXNlUGFydHM7XG5cbiAgICBjb25zdCBpc05pZ2h0ID1cbiAgICAgIChob3VycyA+IHN1bnNldEhvdXIgfHwgKGhvdXJzID09PSBzdW5zZXRIb3VyICYmIG1pbnV0ZXMgPj0gc3Vuc2V0TWludXRlKSkgfHxcbiAgICAgIChob3VycyA8IHN1bnJpc2VIb3VyIHx8IChob3VycyA9PT0gc3VucmlzZUhvdXIgJiYgbWludXRlcyA8IHN1bnJpc2VNaW51dGUpKTtcbiAgICBpY29uTWFwcGluZ1sxMDAwXSA9IGlzTmlnaHQgPyAn8J+MlScgOiAn4piA77iPJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBpc05pZ2h0ID8gJ3ZhcigtLW5pZ2h0bW9kZSknIDogJ3ZhcigtLWRheW1vZGUpJztcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRJY29uLCBnZXRNb29uSWNvbiwgbmlnaHRNb2RlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=