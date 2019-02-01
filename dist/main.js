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

/***/ "./src/el_builder.js":
/*!***************************!*\
  !*** ./src/el_builder.js ***!
  \***************************/
/*! exports provided: createNav, createLink, createButton, createDiv, createUl, createLi, createSpan, createImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNav\", function() { return createNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLink\", function() { return createLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButton\", function() { return createButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUl\", function() { return createUl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLi\", function() { return createLi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpan\", function() { return createSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImg\", function() { return createImg; });\nconst createNav = () => document.createElement(\"NAV\");\n\nconst createLink = () => document.createElement(\"A\");\n\nconst createButton = () => document.createElement(\"BUTTON\");\n\nconst createDiv = () => document.createElement(\"DIV\");\n\nconst createUl = () => document.createElement(\"UL\");\n\nconst createLi = () => document.createElement(\"LI\");\n\nconst createSpan = () => document.createElement(\"SPAN\");\n\nconst createImg = () => document.createElement(\"IMG\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZWxfYnVpbGRlci5qcz8wZGVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVvRyIsImZpbGUiOiIuL3NyYy9lbF9idWlsZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIk5BVlwiKTtcblxuY29uc3QgY3JlYXRlTGluayA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpO1xuXG5jb25zdCBjcmVhdGVEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuXG5jb25zdCBjcmVhdGVVbCA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJVTFwiKTtcblxuY29uc3QgY3JlYXRlTGkgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTElcIik7XG5cbmNvbnN0IGNyZWF0ZVNwYW4gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcblxuY29uc3QgY3JlYXRlSW1nID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcblxuZXhwb3J0IHsgY3JlYXRlTmF2LCBjcmVhdGVMaW5rLCBjcmVhdGVCdXR0b24sIGNyZWF0ZURpdiwgY3JlYXRlVWwsIGNyZWF0ZUxpLCBjcmVhdGVTcGFuLCBjcmVhdGVJbWcgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/el_builder.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_builder */ \"./src/nav_builder.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQStCIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgfSBmcm9tICcuL25hdl9idWlsZGVyJ1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/nav_builder.js":
/*!****************************!*\
  !*** ./src/nav_builder.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _el_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el_builder */ \"./src/el_builder.js\");\n\n\nconst pageInfo = {\n    title: \"EXPATRIATE\",\n    logo: \"logo.png\",\n    links: {\n        link1:{\n            text: \"MENU\",\n            url: \"#\"\n        },\n        link2: {\n            text: \"CONTACT\",\n            url: \"#\"\n        },\n        link3: {\n            text: \"ABOUT\",\n            url: \"#\"\n        },\n\n    }\n}\n\n\nlet mainNav = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createNav\"])();\nmainNav.className = \"navbar navbar-expand-sm navbar-dark bg-dark\";\n\nlet homeLink = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\nObject.assign(homeLink,{\n    className: \"navbar-brand\",\n    href: \"#\",\n})\nhomeLink.innerText = pageInfo.title; \n\nlet logo = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createImg\"])();\nObject.assign(logo, {\n    className: \"d-inline-block align-top\",\n    height: 50, // pixels\n    width: 50, // pixels\n    src: pageInfo.logo\n  })\n\nhomeLink.insertBefore(logo, homeLink.childNodes[0]);\n\n\nlet collapseButton = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createButton\"])();\ncollapseButton.className = \"navbar-toggler collapsed\";\ncollapseButton.setAttribute(\"data-toggle\", \"collapse\");\ncollapseButton.setAttribute(\"data-target\", \"#navBars\");\ncollapseButton.setAttribute(\"aria-controls\", \"navBars\")\ncollapseButton.setAttribute(\"aria-expanded\", \"false\")\ncollapseButton.setAttribute(\"aria-label\", \"Toggle navigation\");\n\nlet collapseIcon = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createSpan\"])();\ncollapseIcon.className = \"navbar-toggler-icon\";\n\nlet navDiv = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])();\nnavDiv.className = \"navbar-collapse collapse\";\nnavDiv.id = \"navBars\";\n\nlet navList = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createUl\"])();\nnavList.className = \"navbar-nav mr-auto\";\n\n\nlet links = Object.entries(pageInfo.links);\n\nfor (let i = 0; i + 1 <= links.length; i++){\n    let navItem = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLi\"])();\n    navItem.className = \"nav-item\";\n    let navLink = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\n    navLink.className = \"nav-link\";\n    navLink.innerHTML = links[i][1].text;\n    navLink.setAttribute(\"href\",links[i][1].url);\n    \n    navItem.appendChild(navLink);\n    \n    navList.appendChild(navItem);\n};\n\nnavDiv.appendChild(navList);\n\ncollapseButton.appendChild(collapseIcon);\n\nmainNav.appendChild(homeLink);\nmainNav.appendChild(collapseButton);\nmainNav.appendChild(navDiv);\n\n\ndocument.getElementById(\"container\").appendChild(mainNav)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmF2X2J1aWxkZXIuanM/MjBlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQXdIOztBQUV4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQSxjQUFjLDZEQUFTO0FBQ3ZCOztBQUVBLGVBQWUsOERBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG9DOztBQUVBLFdBQVcsNkRBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBLHFCQUFxQixnRUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhEQUFVO0FBQzdCOztBQUVBLGFBQWEsNkRBQVM7QUFDdEI7QUFDQTs7QUFFQSxjQUFjLDREQUFRO0FBQ3RCOzs7QUFHQTs7QUFFQSxlQUFlLHVCQUF1QjtBQUN0QyxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQSxrQkFBa0IsOERBQVU7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSIsImZpbGUiOiIuL3NyYy9uYXZfYnVpbGRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlTGluaywgY3JlYXRlQnV0dG9uLCBjcmVhdGVEaXYsIGNyZWF0ZVVsLCBjcmVhdGVMaSwgY3JlYXRlU3BhbiwgY3JlYXRlSW1nIH0gZnJvbSAnLi9lbF9idWlsZGVyJ1xuXG5jb25zdCBwYWdlSW5mbyA9IHtcbiAgICB0aXRsZTogXCJFWFBBVFJJQVRFXCIsXG4gICAgbG9nbzogXCJsb2dvLnBuZ1wiLFxuICAgIGxpbmtzOiB7XG4gICAgICAgIGxpbmsxOntcbiAgICAgICAgICAgIHRleHQ6IFwiTUVOVVwiLFxuICAgICAgICAgICAgdXJsOiBcIiNcIlxuICAgICAgICB9LFxuICAgICAgICBsaW5rMjoge1xuICAgICAgICAgICAgdGV4dDogXCJDT05UQUNUXCIsXG4gICAgICAgICAgICB1cmw6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmszOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkFCT1VUXCIsXG4gICAgICAgICAgICB1cmw6IFwiI1wiXG4gICAgICAgIH0sXG5cbiAgICB9XG59XG5cblxubGV0IG1haW5OYXYgPSBjcmVhdGVOYXYoKTtcbm1haW5OYXYuY2xhc3NOYW1lID0gXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItZGFyayBiZy1kYXJrXCI7XG5cbmxldCBob21lTGluayA9IGNyZWF0ZUxpbmsoKTtcbk9iamVjdC5hc3NpZ24oaG9tZUxpbmsse1xuICAgIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIixcbiAgICBocmVmOiBcIiNcIixcbn0pXG5ob21lTGluay5pbm5lclRleHQgPSBwYWdlSW5mby50aXRsZTsgXG5cbmxldCBsb2dvID0gY3JlYXRlSW1nKCk7XG5PYmplY3QuYXNzaWduKGxvZ28sIHtcbiAgICBjbGFzc05hbWU6IFwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIsXG4gICAgaGVpZ2h0OiA1MCwgLy8gcGl4ZWxzXG4gICAgd2lkdGg6IDUwLCAvLyBwaXhlbHNcbiAgICBzcmM6IHBhZ2VJbmZvLmxvZ29cbiAgfSlcblxuaG9tZUxpbmsuaW5zZXJ0QmVmb3JlKGxvZ28sIGhvbWVMaW5rLmNoaWxkTm9kZXNbMF0pO1xuXG5cbmxldCBjb2xsYXBzZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigpO1xuY29sbGFwc2VCdXR0b24uY2xhc3NOYW1lID0gXCJuYXZiYXItdG9nZ2xlciBjb2xsYXBzZWRcIjtcbmNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiY29sbGFwc2VcIik7XG5jb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCBcIiNuYXZCYXJzXCIpO1xuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBcIm5hdkJhcnNcIilcbmNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKVxuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIpO1xuXG5sZXQgY29sbGFwc2VJY29uID0gY3JlYXRlU3BhbigpO1xuY29sbGFwc2VJY29uLmNsYXNzTmFtZSA9IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiO1xuXG5sZXQgbmF2RGl2ID0gY3JlYXRlRGl2KCk7XG5uYXZEaXYuY2xhc3NOYW1lID0gXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIjtcbm5hdkRpdi5pZCA9IFwibmF2QmFyc1wiO1xuXG5sZXQgbmF2TGlzdCA9IGNyZWF0ZVVsKCk7XG5uYXZMaXN0LmNsYXNzTmFtZSA9IFwibmF2YmFyLW5hdiBtci1hdXRvXCI7XG5cblxubGV0IGxpbmtzID0gT2JqZWN0LmVudHJpZXMocGFnZUluZm8ubGlua3MpO1xuXG5mb3IgKGxldCBpID0gMDsgaSArIDEgPD0gbGlua3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBuYXZJdGVtID0gY3JlYXRlTGkoKTtcbiAgICBuYXZJdGVtLmNsYXNzTmFtZSA9IFwibmF2LWl0ZW1cIjtcbiAgICBsZXQgbmF2TGluayA9IGNyZWF0ZUxpbmsoKTtcbiAgICBuYXZMaW5rLmNsYXNzTmFtZSA9IFwibmF2LWxpbmtcIjtcbiAgICBuYXZMaW5rLmlubmVySFRNTCA9IGxpbmtzW2ldWzFdLnRleHQ7XG4gICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsbGlua3NbaV1bMV0udXJsKTtcbiAgICBcbiAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgIFxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG59O1xuXG5uYXZEaXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbmNvbGxhcHNlQnV0dG9uLmFwcGVuZENoaWxkKGNvbGxhcHNlSWNvbik7XG5cbm1haW5OYXYuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xubWFpbk5hdi5hcHBlbmRDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG5tYWluTmF2LmFwcGVuZENoaWxkKG5hdkRpdik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIikuYXBwZW5kQ2hpbGQobWFpbk5hdikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/nav_builder.js\n");

/***/ })

/******/ });