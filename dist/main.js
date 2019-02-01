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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _el_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el_builder */ \"./src/el_builder.js\");\n\n\nconst pageInfo = {\n    title: \"EXPATRIATE\",\n    logo: \"logo.png\",\n    links: {\n        link1:{\n            text: \"MENU\",\n            url: \"#\"\n        },\n        link2: {\n            text: \"CONTACT\",\n            url: \"#\"\n        },\n        link3: {\n            text: \"ABOUT\",\n            url: \"#\"\n        },\n    },\n    address: {\n        line1: \"5424 NE 30th Ave\",\n        line2: \"PDX, OR 97211 USA\",\n        url: \"https://goo.gl/maps/VWVonZEzDP92\",\n    },\n}\n\n\nlet mainNav = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createNav\"])();\nmainNav.className = \"navbar fixed-top navbar-expand-sm navbar-dark bg-dark\";\n\nlet homeLink = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\nObject.assign(homeLink,{\n    className: \"navbar-brand\",\n    href: \"#\",\n})\nhomeLink.innerText = pageInfo.title; \n\nlet logo = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createImg\"])();\nObject.assign(logo, {\n    className: \"d-inline-block align-top\",\n    height: 50, // pixels\n    width: 50, // pixels\n    src: pageInfo.logo\n  })\n\nhomeLink.insertBefore(logo, homeLink.childNodes[0]);\n\n\nlet collapseButton = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createButton\"])();\ncollapseButton.className = \"navbar-toggler collapsed\";\ncollapseButton.setAttribute(\"data-toggle\", \"collapse\");\ncollapseButton.setAttribute(\"data-target\", \"#navBars\");\ncollapseButton.setAttribute(\"aria-controls\", \"navBars\")\ncollapseButton.setAttribute(\"aria-expanded\", \"false\")\ncollapseButton.setAttribute(\"aria-label\", \"Toggle navigation\");\n\nlet collapseIcon = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createSpan\"])();\ncollapseIcon.className = \"navbar-toggler-icon\";\n\nlet navDiv = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])();\nnavDiv.className = \"navbar-collapse collapse\";\nnavDiv.id = \"navBars\";\n\nlet navList = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createUl\"])();\nnavList.className = \"navbar-nav mr-auto\";\n\nlet links = Object.entries(pageInfo.links);\n\nfor (let i = 0; i + 1 <= links.length; i++){\n    let navItem = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLi\"])();\n    navItem.className = \"nav-item\";\n    let navLink = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\n    navLink.className = \"nav-link\";\n    navLink.innerHTML = links[i][1].text;\n    navLink.setAttribute(\"href\",links[i][1].url);\n    \n    navItem.appendChild(navLink);\n    \n    navList.appendChild(navItem);\n};\n\n\n\nlet address = Object(_el_builder__WEBPACK_IMPORTED_MODULE_0__[\"createLink\"])();\nObject.assign(address,{\n    className: \"address\",\n    href: pageInfo.address.url,\n})\naddress.innerHTML = pageInfo.address.line1 + \"<br>\" + pageInfo.address.line2;\n\n\n\n\nnavDiv.appendChild(navList);\nnavDiv.appendChild(address);\ncollapseButton.appendChild(collapseIcon);\n\nmainNav.appendChild(homeLink);\nmainNav.appendChild(collapseButton);\nmainNav.appendChild(navDiv);\n\n\n\n\ndocument.getElementById(\"mainNav\").appendChild(mainNav)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmF2X2J1aWxkZXIuanM/MjBlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQXdIOztBQUV4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0EsY0FBYyw2REFBUztBQUN2Qjs7QUFFQSxlQUFlLDhEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQzs7QUFFQSxXQUFXLDZEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQSxxQkFBcUIsZ0VBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw4REFBVTtBQUM3Qjs7QUFFQSxhQUFhLDZEQUFTO0FBQ3RCO0FBQ0E7O0FBRUEsY0FBYyw0REFBUTtBQUN0Qjs7QUFFQTs7QUFFQSxlQUFlLHVCQUF1QjtBQUN0QyxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQSxrQkFBa0IsOERBQVU7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxjQUFjLDhEQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBIiwiZmlsZSI6Ii4vc3JjL25hdl9idWlsZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmF2LCBjcmVhdGVMaW5rLCBjcmVhdGVCdXR0b24sIGNyZWF0ZURpdiwgY3JlYXRlVWwsIGNyZWF0ZUxpLCBjcmVhdGVTcGFuLCBjcmVhdGVJbWcgfSBmcm9tICcuL2VsX2J1aWxkZXInXG5cbmNvbnN0IHBhZ2VJbmZvID0ge1xuICAgIHRpdGxlOiBcIkVYUEFUUklBVEVcIixcbiAgICBsb2dvOiBcImxvZ28ucG5nXCIsXG4gICAgbGlua3M6IHtcbiAgICAgICAgbGluazE6e1xuICAgICAgICAgICAgdGV4dDogXCJNRU5VXCIsXG4gICAgICAgICAgICB1cmw6IFwiI1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmsyOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNPTlRBQ1RcIixcbiAgICAgICAgICAgIHVybDogXCIjXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGluazM6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQUJPVVRcIixcbiAgICAgICAgICAgIHVybDogXCIjXCJcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGFkZHJlc3M6IHtcbiAgICAgICAgbGluZTE6IFwiNTQyNCBORSAzMHRoIEF2ZVwiLFxuICAgICAgICBsaW5lMjogXCJQRFgsIE9SIDk3MjExIFVTQVwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9WV1ZvblpFekRQOTJcIixcbiAgICB9LFxufVxuXG5cbmxldCBtYWluTmF2ID0gY3JlYXRlTmF2KCk7XG5tYWluTmF2LmNsYXNzTmFtZSA9IFwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci1kYXJrIGJnLWRhcmtcIjtcblxubGV0IGhvbWVMaW5rID0gY3JlYXRlTGluaygpO1xuT2JqZWN0LmFzc2lnbihob21lTGluayx7XG4gICAgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLFxuICAgIGhyZWY6IFwiI1wiLFxufSlcbmhvbWVMaW5rLmlubmVyVGV4dCA9IHBhZ2VJbmZvLnRpdGxlOyBcblxubGV0IGxvZ28gPSBjcmVhdGVJbWcoKTtcbk9iamVjdC5hc3NpZ24obG9nbywge1xuICAgIGNsYXNzTmFtZTogXCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIixcbiAgICBoZWlnaHQ6IDUwLCAvLyBwaXhlbHNcbiAgICB3aWR0aDogNTAsIC8vIHBpeGVsc1xuICAgIHNyYzogcGFnZUluZm8ubG9nb1xuICB9KVxuXG5ob21lTGluay5pbnNlcnRCZWZvcmUobG9nbywgaG9tZUxpbmsuY2hpbGROb2Rlc1swXSk7XG5cblxubGV0IGNvbGxhcHNlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCk7XG5jb2xsYXBzZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm5hdmJhci10b2dnbGVyIGNvbGxhcHNlZFwiO1xuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJjb2xsYXBzZVwiKTtcbmNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiI25hdkJhcnNcIik7XG5jb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIFwibmF2QmFyc1wiKVxuY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpXG5jb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiVG9nZ2xlIG5hdmlnYXRpb25cIik7XG5cbmxldCBjb2xsYXBzZUljb24gPSBjcmVhdGVTcGFuKCk7XG5jb2xsYXBzZUljb24uY2xhc3NOYW1lID0gXCJuYXZiYXItdG9nZ2xlci1pY29uXCI7XG5cbmxldCBuYXZEaXYgPSBjcmVhdGVEaXYoKTtcbm5hdkRpdi5jbGFzc05hbWUgPSBcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiO1xubmF2RGl2LmlkID0gXCJuYXZCYXJzXCI7XG5cbmxldCBuYXZMaXN0ID0gY3JlYXRlVWwoKTtcbm5hdkxpc3QuY2xhc3NOYW1lID0gXCJuYXZiYXItbmF2IG1yLWF1dG9cIjtcblxubGV0IGxpbmtzID0gT2JqZWN0LmVudHJpZXMocGFnZUluZm8ubGlua3MpO1xuXG5mb3IgKGxldCBpID0gMDsgaSArIDEgPD0gbGlua3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBuYXZJdGVtID0gY3JlYXRlTGkoKTtcbiAgICBuYXZJdGVtLmNsYXNzTmFtZSA9IFwibmF2LWl0ZW1cIjtcbiAgICBsZXQgbmF2TGluayA9IGNyZWF0ZUxpbmsoKTtcbiAgICBuYXZMaW5rLmNsYXNzTmFtZSA9IFwibmF2LWxpbmtcIjtcbiAgICBuYXZMaW5rLmlubmVySFRNTCA9IGxpbmtzW2ldWzFdLnRleHQ7XG4gICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsbGlua3NbaV1bMV0udXJsKTtcbiAgICBcbiAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgIFxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG59O1xuXG5cblxubGV0IGFkZHJlc3MgPSBjcmVhdGVMaW5rKCk7XG5PYmplY3QuYXNzaWduKGFkZHJlc3Mse1xuICAgIGNsYXNzTmFtZTogXCJhZGRyZXNzXCIsXG4gICAgaHJlZjogcGFnZUluZm8uYWRkcmVzcy51cmwsXG59KVxuYWRkcmVzcy5pbm5lckhUTUwgPSBwYWdlSW5mby5hZGRyZXNzLmxpbmUxICsgXCI8YnI+XCIgKyBwYWdlSW5mby5hZGRyZXNzLmxpbmUyO1xuXG5cblxuXG5uYXZEaXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5uYXZEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5jb2xsYXBzZUJ1dHRvbi5hcHBlbmRDaGlsZChjb2xsYXBzZUljb24pO1xuXG5tYWluTmF2LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbm1haW5OYXYuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xubWFpbk5hdi5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG5cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5OYXZcIikuYXBwZW5kQ2hpbGQobWFpbk5hdikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/nav_builder.js\n");

/***/ })

/******/ });