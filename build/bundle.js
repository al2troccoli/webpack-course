/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = 'http://p-hold.com/200/300';

document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'file-loader'\n    at Function.Module._resolveFilename (module.js:547:15)\n    at Function.Module._load (module.js:474:25)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.loader (C:\\Users\\al2tr\\Documents\\Estudios\\curso webpack\\webpack-course\\node_modules\\url-loader\\dist\\index.js:59:20)");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);