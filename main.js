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

/***/ "./src/contact-content.js"
/*!********************************!*\
  !*** ./src/contact-content.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContactContent: () => (/* binding */ displayContactContent)\n/* harmony export */ });\nfunction displayContactContent(targetEle) {\n    const headerEle = document.createElement(\"h1\");\n    headerEle.textContent = \"Contact Us\";\n    const contactEle = document.createElement('a');\n    const email = \"awesome-resturant@email.com\";\n    contactEle.setAttribute(\"href\", `mailto:${email}`);\n    contactEle.textContent = email;\n    targetEle.append(headerEle);\n    targetEle.append(contactEle);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact-content.js?\n}");

/***/ },

/***/ "./src/home-content.js"
/*!*****************************!*\
  !*** ./src/home-content.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHomeContent: () => (/* binding */ displayHomeContent)\n/* harmony export */ });\nfunction displayHomeContent(targetEle) {\n    const header = document.createElement(\"h1\");\n    header.textContent = \"My Awesome Restaurant\";\n    const descriptionDiv = document.createElement('div');\n    const descriptionText = document.createElement('p');\n    descriptionText.textContent = \"Our awesome restaurent serves awesome breakfast try it now, and get addicted to it!\";\n    descriptionDiv.append(descriptionText);\n    targetEle.append(header);\n    targetEle.append(descriptionDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-content.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _switch_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-tab.js */ \"./src/switch-tab.js\");\nconst contentElement = document.querySelector(\"#content\");\nconst tabButtons = document.querySelectorAll(\".tab-button\");\n\n\n\nwindow.onload = (0,_switch_tab_js__WEBPACK_IMPORTED_MODULE_0__.switchTab)(\"home\", contentElement);\n\ntabButtons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => (0,_switch_tab_js__WEBPACK_IMPORTED_MODULE_0__.switchTab)(btn.textContent, contentElement));\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu-content.js"
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenuContent: () => (/* binding */ displayMenuContent)\n/* harmony export */ });\nfunction displayMenuContent(targetEle) {\n    const headerEle = document.createElement(\"h1\");\n    headerEle.textContent = \"Menu\";\n    const menuDiv = document.createElement('div');\n    targetEle.append(headerEle);\n    targetEle.append(menuDiv);\n    createMenuItem(\"Scrambled Eggs\", \"10$\", menuDiv);\n    createMenuItem(\"Boiled Eggs\", \"8$\", menuDiv);\n    createMenuItem(\"Coffee\", \"5$\", menuDiv);\n}\n\n\nfunction createMenuItem(name, price, parentEle) {\n    const item = document.createElement(\"div\");\n    const itemName = document.createElement(\"h3\");\n    itemName.textContent = name;\n    const itemPrice = document.createElement(\"p\");\n    itemPrice.textContent = price;\n    item.append(itemName);\n    item.append(itemPrice);\n    item.classList.add(\"menu-item\");\n    parentEle.append(item);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-content.js?\n}");

/***/ },

/***/ "./src/switch-tab.js"
/*!***************************!*\
  !*** ./src/switch-tab.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchTab: () => (/* binding */ switchTab)\n/* harmony export */ });\n/* harmony import */ var _home_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-content.js */ \"./src/home-content.js\");\n/* harmony import */ var _contact_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-content.js */ \"./src/contact-content.js\");\n/* harmony import */ var _menu_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-content.js */ \"./src/menu-content.js\");\n\n\n\n\nfunction switchTab(tab, contentElement) {\n    const tabName = tab.toLowerCase();\n    contentElement.innerHTML = \"\";\n    if(tabName == \"home\") return (0,_home_content_js__WEBPACK_IMPORTED_MODULE_0__.displayHomeContent)(contentElement);\n    if(tabName == \"contact\") return (0,_contact_content_js__WEBPACK_IMPORTED_MODULE_1__.displayContactContent)(contentElement);\n    if(tabName == \"menu\") return (0,_menu_content_js__WEBPACK_IMPORTED_MODULE_2__.displayMenuContent)(contentElement);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/switch-tab.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;