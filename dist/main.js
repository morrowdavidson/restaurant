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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_skeleton */ \"./src/nav_skeleton.js\");\n\n\nlet mainNav = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createNav\"])();\nmainNav.className = \"navbar navbar-expand-md navbar-dark bg-dark\";\n\nlet homeLink = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\nhomeLink.className = \"navbar-brand\";\nhomeLink.innerHTML = \"HOME\"; \n\nlet collapseButton = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createButton\"])();\ncollapseButton.className = \"navbar-toggler collapsed\";\ncollapseButton.setAttribute(\"data-toggle\", \"collapse\");\ncollapseButton.setAttribute(\"data-target\", \"#navBars\");\ncollapseButton.setAttribute(\"aria-controls\", \"navBars\")\ncollapseButton.setAttribute(\"aria-expanded\", \"false\")\ncollapseButton.setAttribute(\"aria-label\", \"Toggle navigation\");\n\nlet collapseIcon = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createSpan\"])();\ncollapseIcon.className = \"navbar-toggler-icon\";\n\nlet navDiv = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])();\nnavDiv.className = \"navbar-collapse collapse\";\nnavDiv.id = \"navBars\";\n\nlet navList = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createUl\"])();\nnavList.className = \"navbar-nav mr-auto\";\n\nlet navItem = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createLi\"])();\nnavItem.className = \"nav-item\";\n\nlet navLink = Object(_nav_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\nnavLink.className = \"nav-link\";\nnavLink.innerHTML = \"Home\";\nnavLink.setAttribute(\"href\",\"#\");\n\nnavItem.appendChild(navLink);\n\nnavList.appendChild(navItem);\n\nnavDiv.appendChild(navList);\n\ncollapseButton.appendChild(collapseIcon);\n\nmainNav.appendChild(homeLink);\nmainNav.appendChild(collapseButton);\nmainNav.appendChild(navDiv);\n\n\ndocument.getElementById(\"container\").appendChild(mainNav)\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQStHOztBQUUvRyxjQUFjLCtEQUFTO0FBQ3ZCOztBQUVBLGVBQWUsZ0VBQVU7QUFDekI7QUFDQSw0Qjs7QUFFQSxxQkFBcUIsa0VBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnRUFBVTtBQUM3Qjs7QUFFQSxhQUFhLCtEQUFTO0FBQ3RCO0FBQ0E7O0FBRUEsY0FBYyw4REFBUTtBQUN0Qjs7QUFFQSxjQUFjLDhEQUFRO0FBQ3RCOztBQUVBLGNBQWMsZ0VBQVU7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZUxpbmssIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlRGl2LCBjcmVhdGVVbCwgY3JlYXRlTGksIGNyZWF0ZVNwYW4gfSBmcm9tICcuL25hdl9za2VsZXRvbidcblxubGV0IG1haW5OYXYgPSBjcmVhdGVOYXYoKTtcbm1haW5OYXYuY2xhc3NOYW1lID0gXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItZGFyayBiZy1kYXJrXCI7XG5cbmxldCBob21lTGluayA9IGNyZWF0ZUxpbmsoKTtcbmhvbWVMaW5rLmNsYXNzTmFtZSA9IFwibmF2YmFyLWJyYW5kXCI7XG5ob21lTGluay5pbm5lckhUTUwgPSBcIkhPTUVcIjsgXG5cbmxldCBjb2xsYXBzZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigpO1xuY29sbGFwc2VCdXR0b24uY2xhc3NOYW1lID0gXCJuYXZiYXItdG9nZ2xlciBjb2xsYXBzZWRcIjtcbmNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiY29sbGFwc2VcIik7XG5jb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCBcIiNuYXZCYXJzXCIpO1xuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBcIm5hdkJhcnNcIilcbmNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKVxuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIpO1xuXG5sZXQgY29sbGFwc2VJY29uID0gY3JlYXRlU3BhbigpO1xuY29sbGFwc2VJY29uLmNsYXNzTmFtZSA9IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiO1xuXG5sZXQgbmF2RGl2ID0gY3JlYXRlRGl2KCk7XG5uYXZEaXYuY2xhc3NOYW1lID0gXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIjtcbm5hdkRpdi5pZCA9IFwibmF2QmFyc1wiO1xuXG5sZXQgbmF2TGlzdCA9IGNyZWF0ZVVsKCk7XG5uYXZMaXN0LmNsYXNzTmFtZSA9IFwibmF2YmFyLW5hdiBtci1hdXRvXCI7XG5cbmxldCBuYXZJdGVtID0gY3JlYXRlTGkoKTtcbm5hdkl0ZW0uY2xhc3NOYW1lID0gXCJuYXYtaXRlbVwiO1xuXG5sZXQgbmF2TGluayA9IGNyZWF0ZUxpbmsoKTtcbm5hdkxpbmsuY2xhc3NOYW1lID0gXCJuYXYtbGlua1wiO1xubmF2TGluay5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbm5hdkxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiI1wiKTtcblxubmF2SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcblxubmF2TGlzdC5hcHBlbmRDaGlsZChuYXZJdGVtKTtcblxubmF2RGl2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG5jb2xsYXBzZUJ1dHRvbi5hcHBlbmRDaGlsZChjb2xsYXBzZUljb24pO1xuXG5tYWluTmF2LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbm1haW5OYXYuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xubWFpbk5hdi5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG1haW5OYXYpXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/nav_skeleton.js":
/*!*****************************!*\
  !*** ./src/nav_skeleton.js ***!
  \*****************************/
/*! exports provided: createNav, createLink, createButton, createDiv, createUl, createLi, createSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNav\", function() { return createNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLink\", function() { return createLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButton\", function() { return createButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUl\", function() { return createUl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLi\", function() { return createLi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpan\", function() { return createSpan; });\nconst createNav = () => document.createElement(\"NAV\");\n\nconst createLink = () => document.createElement(\"A\");\n\nconst createButton = () => document.createElement(\"BUTTON\");\n\nconst createDiv = () => document.createElement(\"DIV\");\n\nconst createUl = () => document.createElement(\"UL\");\n\nconst createLi = () => document.createElement(\"LI\");\n\nconst createSpan = () => document.createElement(\"SPAN\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmF2X3NrZWxldG9uLmpzP2MyNzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUV5RiIsImZpbGUiOiIuL3NyYy9uYXZfc2tlbGV0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTkFWXCIpO1xuXG5jb25zdCBjcmVhdGVMaW5rID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIik7XG5cbmNvbnN0IGNyZWF0ZURpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG5cbmNvbnN0IGNyZWF0ZVVsID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlVMXCIpO1xuXG5jb25zdCBjcmVhdGVMaSA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMSVwiKTtcblxuY29uc3QgY3JlYXRlU3BhbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xuXG5leHBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZUxpbmssIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlRGl2LCBjcmVhdGVVbCwgY3JlYXRlTGksIGNyZWF0ZVNwYW4gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/nav_skeleton.js\n");

/***/ })

/******/ });