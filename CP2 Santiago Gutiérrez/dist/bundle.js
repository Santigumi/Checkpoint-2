/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCats\": () => (/* binding */ AttributeCats),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_dataFecthCats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dataFecthCats */ \"./src/services/dataFecthCats.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nvar AttributeCats;\n(function (AttributeCats) {\n    AttributeCats[\"facts\"] = \"facts\";\n    AttributeCats[\"img\"] = \"img\";\n})(AttributeCats || (AttributeCats = {}));\nclass Catsimages extends HTMLElement {\n    constructor() {\n        super();\n        this.index = 0;\n        this.attachShadow({ mode: 'open' });\n        this.onButtonClicked = this.onButtonClicked.bind(this);\n    }\n    static get observedAttributes() {\n        const attrs = {\n            facts: null,\n            img: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        this[propName] = newValue;\n        this.mount();\n    }\n    connectedCallback() {\n        this.mount();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n    <h1>Cats Facts</h1>\r\n    <p>${this.facts} </p>\r\n    <button class=\"btn-cats\">Mostrar gatos</button>\r\n    `;\n        }\n    }\n    addListeners() {\n        var _a, _b;\n        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.btn-cats')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.onButtonClicked);\n    }\n    mount() {\n        this.render();\n        this.addListeners();\n    }\n    onButtonClicked() {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const getImages = yield (0,_services_dataFecthCats__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n                console.log(getImages);\n                const image = document.createElement('img');\n                image.setAttribute('src', 'https://cataas.com/cat/says/hola');\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(image);\n                this.index++;\n            }\n            catch (_b) {\n                console.log(\"error\");\n            }\n        });\n    }\n}\ncustomElements.define('my-catsfacts', Catsimages);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catsimages);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _services_dataFecthFacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dataFecthFacts */ \"./src/services/dataFecthFacts.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.container = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const data = yield (0,_services_dataFecthFacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                console.log(data);\n                this.render(data);\n            }\n            catch (_a) {\n                console.log(\"error\");\n            }\n        });\n    }\n    render(data) {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ` `;\n            const facts = document.createElement('my-catsfacts');\n            facts.setAttribute(_components_export__WEBPACK_IMPORTED_MODULE_0__.AttributeCats.facts, data);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(facts);\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/dataFecthCats.ts":
/*!***************************************!*\
  !*** ./src/services/dataFecthCats.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getImagescats() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const getData = yield fetch('https://cataas.com/cat/says/hola').then((res) => res.url);\n            return getData;\n        }\n        catch (_a) {\n            console.log(\"error\");\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImagescats);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/dataFecthCats.ts?");

/***/ }),

/***/ "./src/services/dataFecthFacts.ts":
/*!****************************************!*\
  !*** ./src/services/dataFecthFacts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getDescription() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const getData = yield fetch('https://catfact.ninja/fact').then((res) => res.json());\n            const description = getData;\n            return description.fact;\n        }\n        catch (_a) {\n            console.log(\"error\");\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDescription);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/dataFecthFacts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;