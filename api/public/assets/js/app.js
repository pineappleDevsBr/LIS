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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validation */ "./resources/assets/js/modules/validation.js");
/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/questions */ "./resources/assets/js/modules/questions/index.js");
/* harmony import */ var _modules_radios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/radios */ "./resources/assets/js/modules/radios.js");



_modules_validation__WEBPACK_IMPORTED_MODULE_0__["default"].create('[data-validation]');
_modules_questions__WEBPACK_IMPORTED_MODULE_1__["default"].create('[data-questions]');
_modules_radios__WEBPACK_IMPORTED_MODULE_2__["default"].create('[data-radio]');

/***/ }),

/***/ "./resources/assets/js/modules/questions/index.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/modules/questions/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/quiz */ "./resources/assets/js/modules/questions/template/quiz.js");
/* harmony import */ var _template_complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/complete */ "./resources/assets/js/modules/questions/template/complete.js");
/* harmony import */ var _radios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radios */ "./resources/assets/js/modules/radios.js");



var templates = {
  quiz: _template_quiz__WEBPACK_IMPORTED_MODULE_0__["default"],
  complete: _template_complete__WEBPACK_IMPORTED_MODULE_1__["default"]
};

function questions(elm) {
  var ctx = elm;
  var btn = ctx.querySelector('[data-questions-btn]');
  var holder = ctx.querySelector('[data-questions-holder]');
  var config = JSON.parse(elm.dataset.questions);
  var idx = 1;
  btn.addEventListener('click', function () {
    if (idx <= config.count) {
      var template = templates[config.template](idx);
      _radios__WEBPACK_IMPORTED_MODULE_2__["default"].init(template);
      holder.appendChild(template);
      idx += 1;
    } else {
      btn.parentNode.removeChild(btn);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: function create(slc) {
    var elms = Array.from(document.querySelectorAll(slc));
    var instances = [];
    elms.forEach(function (item) {
      return instances.push(questions(item));
    });
  }
});

/***/ }),

/***/ "./resources/assets/js/modules/questions/template/complete.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/modules/questions/template/complete.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (idx) {
  var template = "\n    <li class=\"list-group-item rounded border mb-2 border-info row\" data-questions-item=\"\">\n      <p>Question #".concat(idx, "</p>\n      <div class=\"col form-group d-flex align-items-center\">\n        <label for=\"questions_").concat(idx, "\" class=\"flex-grow-0 control-label mb-1 mr-2\">Text*</label>\n        <input id=\"question_").concat(idx, "\" name=\"questions[").concat(idx, "].text\" type=\"text\" class=\"form-control\">\n      </div>\n      <div class=\"col form-group d-flex align-items-center\">\n        <label for=\"asnwer_").concat(idx, "\" class=\"flex-grow-0 control-label mb-1 mr-2\">Asnwer*</label>\n        <input id=\"answer_").concat(idx, "\" name=\"questions[").concat(idx, "].answer\" type=\"text\" class=\"form-control\">\n      </div>\n    </li>\n  ");
  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
});

/***/ }),

/***/ "./resources/assets/js/modules/questions/template/quiz.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/modules/questions/template/quiz.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (idx) {
  var template = "\n    <li class=\"list-group-item rounded border mb-2 border-info\" data-questions-item=\"\">\n      <p>Question #".concat(idx, "</p>\n      <div class=\"form-group\">\n        <label for=\"question_").concat(idx, "\" class=\"control-label mb-1\">Question*</label>\n        <input id=\"question_").concat(idx, "\" name=\"questions[").concat(idx, "].question\" type=\"text\" class=\"form-control\" aria-required=\"true\"\n          aria-invalid=\"false\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"text_").concat(idx, "\" class=\"control-label mb-1\">Text*</label>\n        <input id=\"text_").concat(idx, "\" name=\"questions[").concat(idx, "].text\" type=\"text\" class=\"form-control\" aria-required=\"true\"\n          aria-invalid=\"false\" required>\n      </div>\n\n      <p>Answers</p>\n      <ul class=\"list-group list-group-flush\">\n\n        <li class=\"list-group-item px-0 d-flex\">\n          <div class=\"col form-group mb-0\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col flex-grow-0\">\n                <label for=\"name").concat(idx, "0\" class=\"control-label mb-0\">Answer</label>\n              </div>\n              <div class=\"col\">\n                <input id=\"name").concat(idx, "0\" name=\"questions[").concat(idx, "].answers[0].answer\" type=\"text\" class=\"form-control\"\n              aria-invalid=\"false\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col form-group mb-0 d-flex align-items-center\">\n            <div class=\"col col-md-9\">\n              <div class=\"form-check\">\n                <div class=\"radio\">\n                  <label for=\"radio").concat(idx, "0\" class=\"form-check-label \">\n                  <input data-radio-right type=\"radio\" id=\"radio").concat(idx, "0\" name=\"questions[").concat(idx, "].answers[0].right\" value=\"true\" class=\"form-check-input\">Is right\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item px-0 d-flex\">\n          <div class=\"col form-group mb-0\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col flex-grow-0\">\n                <label for=\"name").concat(idx, "1\" class=\"control-label mb-0\">Answer</label>\n              </div>\n              <div class=\"col\">\n                <input id=\"name").concat(idx, "1\" name=\"questions[").concat(idx, "].answers[1].answer\" type=\"text\" class=\"form-control\"\n              aria-invalid=\"false\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col form-group mb-0 d-flex align-items-center\">\n            <div class=\"col col-md-9\">\n              <div class=\"form-check\">\n                <div class=\"radio\">\n                  <label for=\"radio").concat(idx, "1\" class=\"form-check-label \">\n                  <input data-radio-right type=\"radio\" id=\"radio").concat(idx, "1\" name=\"questions[").concat(idx, "].answers[1].right\" value=\"true\" class=\"form-check-input\">Is right\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item px-0 d-flex\">\n          <div class=\"col form-group mb-0\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col flex-grow-0\">\n                <label for=\"name").concat(idx, "2\" class=\"control-label mb-0\">Answer</label>\n              </div>\n              <div class=\"col\">\n                <input id=\"name").concat(idx, "2\" name=\"questions[").concat(idx, "].answers[2].answer\" type=\"text\" class=\"form-control\"\n              aria-invalid=\"false\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col form-group mb-0 d-flex align-items-center\">\n            <div class=\"col col-md-9\">\n              <div class=\"form-check\">\n                <div class=\"radio\">\n                  <label for=\"radio").concat(idx, "2\" class=\"form-check-label \">\n                  <input data-radio-right type=\"radio\" id=\"radio").concat(idx, "2\" name=\"questions[").concat(idx, "].answers[2].right\" value=\"true\" class=\"form-check-input\">Is right\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item px-0 d-flex\">\n          <div class=\"col form-group mb-0\">\n            <div class=\"row d-flex align-items-center\">\n              <div class=\"col flex-grow-0\">\n                <label for=\"name").concat(idx, "3\" class=\"control-label mb-0\">Answer</label>\n              </div>\n              <div class=\"col\">\n                <input id=\"name").concat(idx, "3\" name=\"questions[").concat(idx, "].answers[3].answer\" type=\"text\" class=\"form-control\"\n              aria-invalid=\"false\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col form-group mb-0 d-flex align-items-center\">\n            <div class=\"col col-md-9\">\n              <div class=\"form-check\">\n                <div class=\"radio\">\n                  <label for=\"radio").concat(idx, "3\" class=\"form-check-label \">\n                  <input data-radio-right type=\"radio\" id=\"radio").concat(idx, "3\" name=\"questions[").concat(idx, "].answers[3].right\" value=\"true\" class=\"form-check-input\">Is right\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </li>\n  ");
  return new DOMParser().parseFromString(template, 'text/html').body.firstChild;
});

/***/ }),

/***/ "./resources/assets/js/modules/radios.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/modules/radios.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function radios(elm) {
  var radios = Array.from(elm.querySelectorAll('[data-radio-right]'));
  var last = radios.find(function (it) {
    return it.checked;
  });
  radios.forEach(function (rd) {
    rd.addEventListener('input', function (e) {
      if (last) last.checked = false;
      e.currentTarget.checked = true;
      last = e.currentTarget;
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: function create(slc) {
    var elms = Array.from(document.querySelectorAll(slc));
    var instances = [];
    elms.forEach(function (item) {
      return instances.push(radios(item));
    });
  },
  init: function init(elm) {
    if (elm.querySelector('[data-radio-right]')) {
      return radios(elm);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/modules/validation.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/modules/validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function validation(elm) {
  var ctx = elm;
  var quant = elm.dataset.validation;
  var error = document.querySelector('[data-error]');
  ctx.addEventListener('submit', function (e) {
    e.preventDefault();

    if (ctx.querySelectorAll('[data-validation-item]').length < quant) {
      error.classList.add('show');
    } else {
      e.currentTarget.submit();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: function create(slc) {
    var elms = Array.from(document.querySelectorAll(slc));
    var instances = [];
    elms.forEach(function (item) {
      return instances.push(validation(item));
    });
  }
});

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./resources/assets/js/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/novahaus-dev/Projects/LIS/api/resources/assets/js/app.js */"./resources/assets/js/app.js");


/***/ })

/******/ });