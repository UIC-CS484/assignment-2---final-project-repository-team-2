(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_js_export_js"],{

/***/ "./src/js/Controllers/AuthController.js":
/*!**********************************************!*\
  !*** ./src/js/Controllers/AuthController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StateController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateController */ "./src/js/Controllers/StateController.js");
// interface
// login, logout -> sqlite + passport


var _require = __webpack_require__(/*! ../Helpers/cookie */ "./src/js/Helpers/cookie.js"),
    getCookie = _require.getCookie,
    setCookie = _require.setCookie;

var AuthController = function () {
  function login() {
    // setCookie("sessionID", "918827", 5);
    var username = prompt("Your Username:", "test");
    var password = prompt("Your Password:", "test");
    var data = {
      username: username,
      password: password
    };
    fetch("/auth/login", {
      method: 'POST',
      // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      // no-cors, *cors, same-origin
      cache: 'no-cache',
      // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header

    }).then(function (res) {
      if (res.redirected === true) document.location.href = res.url;
    })["catch"](function (err) {
      return console.error(err);
    }); // StateController.set({
    //     authenticated: true,
    // })
  }

  function logout() {
    document.location.href = "/auth/logout";
  }

  function register() {
    // get fields vals
    var username = document.getElementById("password").value;
    var password = document.getElementById("username").value;
    fetch("/auth/register", {
      method: 'POST',
      // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      // no-cors, *cors, same-origin
      cache: 'no-cache',
      // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      // manual, *follow, error
      referrerPolicy: 'no-referrer',
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        username: username,
        password: password
      }) // body data type must match "Content-Type" header

    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return console.log(data);
    })["catch"](function (err) {
      return err.json();
    });
  }

  return {
    login: login,
    logout: logout,
    register: register
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthController);

/***/ }),

/***/ "./src/js/Controllers/NotificationCtr/NotificationController.js":
/*!**********************************************************************!*\
  !*** ./src/js/Controllers/NotificationCtr/NotificationController.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationController": () => (/* binding */ NotificationController)
/* harmony export */ });
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar */ "./src/js/Controllers/NotificationCtr/TopBar.js");
// ui elems

var NotificationController = function () {// 2 types 
  // topbar 
  // dismissable modal.
}();

/***/ }),

/***/ "./src/js/Controllers/NotificationCtr/TopBar.js":
/*!******************************************************!*\
  !*** ./src/js/Controllers/NotificationCtr/TopBar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBar": () => (/* binding */ TopBar)
/* harmony export */ });
var TopBar = function () {
  function show() {}

  function hide() {}

  function setText(msg) {// set text in UI elem
  }

  return {
    show: show,
    hide: hide,
    setText: setText
  };
}();

/***/ }),

/***/ "./src/js/Controllers/StateController.js":
/*!***********************************************!*\
  !*** ./src/js/Controllers/StateController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StateControllerClass = function StateControllerClass() {
  var _this = this;

  _classCallCheck(this, StateControllerClass);

  _defineProperty(this, "state", {});

  _defineProperty(this, "set", function (newState) {
    _this.state = _objectSpread(_objectSpread({}, _this.state), newState);

    _this.fire(_this.state);
  });

  _defineProperty(this, "get", function () {
    return _this.state;
  });

  _defineProperty(this, "subscribers", []);

  _defineProperty(this, "subscribeAll", function (subsArr) {
    var _iterator = _createForOfIteratorHelper(subsArr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sub = _step.value;
        var fn = sub.fn,
            that = sub.that;

        _this.subscribe(fn, that);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });

  _defineProperty(this, "subscribe", function (fn) {
    var that = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _this.subscribers.push({
      fn: fn,
      that: that
    });
  });

  _defineProperty(this, "fire", function (data) {
    _this.subscribers.forEach(function (_ref) {
      var fn = _ref.fn,
          that = _ref.that;
      fn.call(that, data);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StateControllerClass());

/***/ }),

/***/ "./src/js/Helpers/Loader.js":
/*!**********************************!*\
  !*** ./src/js/Helpers/Loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Loader = function () {
  'use strict';

  var RELOADING_TIME = 700; // Private

  var loading = true;
  var loaderWrapperSelector = '#loader_wrapper';

  function showLoader() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (cb) $(loaderWrapperSelector).fadeIn('slow', cb);else $(loaderWrapperSelector).fadeIn('slow');
  }

  function hideLoader() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (cb) $(loaderWrapperSelector).fadeOut('slow', cb);else $(loaderWrapperSelector).fadeOut('slow');
  } // Public


  function simulateReloading(callback, callbackObject, args) {
    var _arguments = arguments;
    showLoader();
    setTimeout(function () {
      if (typeof callback === 'function' && typeof args !== 'undefined' && _typeof(callbackObject) !== undefined) {
        // Get all arguments in an array
        var argsArr = Array.prototype.slice.call(_arguments, 2); // Execute function with the given array of arguments

        callback.apply(callbackObject, argsArr);
      } else if (typeof callback === 'function' && _typeof(callbackObject) !== undefined) {
        callback.call(callbackObject);
      }

      hideLoader();
    }, RELOADING_TIME);
  }

  function toggleReload() {
    var isPageLoading = getPageLoadingStatus();

    if (isPageLoading === true) {
      hideLoader();
    } else {
      showLoader();
    } // flip the page loading status


    setPageLoadingStatus(!isPageLoading);
  }

  function getPageLoadingStatus() {
    return loading;
  }

  function setPageLoadingStatus(status) {
    loading = status;
  }

  hideLoader(); // Interface

  return {
    getPageLoadingStatus: getPageLoadingStatus,
    setPageLoadingStatus: setPageLoadingStatus,
    toggleReload: toggleReload,
    simulateReloading: simulateReloading,
    showLoader: showLoader,
    hideLoader: hideLoader
  };
}();

/***/ }),

/***/ "./src/js/Helpers/Modal.js":
/*!*********************************!*\
  !*** ./src/js/Helpers/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Modal = function () {
  var ModalStatus = {
    isOpened: false
  };
  var Selectors = {
    ModalContent: '#ModalContent',
    ModalContainer: '.modal_container',
    CloseModalBtn: '.closeModalBtn',
    ModalTitle: '#modalTitle',
    ModalBtns: "#ModalBtns",
    Modal: "#modal"
  };

  function _setIsOpened(bool) {
    if (typeof bool === "boolean") ModalStatus.isOpened = !ModalStatus.isOpened;else throw new Error("Invalid type was passed to _setIsOpened function!!!");
  } // Public


  function populateModal(title, contentHtml, btnsHtml) {
    // Change Modal Title
    $(Selectors.ModalTitle).html(title); // populate ModalContent with html content

    $(Selectors.ModalContent).html(contentHtml);
    $(Selectors.ModalBtns).html(btnsHtml);
  }

  function clearModal() {
    $(Selectors.ModalTitle).html('');
    $(Selectors.ModalContent).html('');
    $(Selectors.ModalBtns).html(''); // apply default modal style

    applyStyle("default");
  }

  function hideAndClear() {
    $(Selectors.ModalContainer).fadeOut(700, function () {
      // change modalOpened status
      _setIsOpened(false); // clear the modal


      clearModal();
    });
  }

  function show() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    $(Selectors.ModalContainer).fadeIn(700, function () {
      // change modalOpened status
      _setIsOpened(true); // check for callback func


      if (typeof callback === 'function') callback();
    });
  }

  function hide() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var callbackObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    $(Selectors.ModalContainer).fadeOut(700, function () {
      // change modalOpened status
      _setIsOpened(false); // check for callback func


      if (callback || callbackObj) {
        if (typeof callback === 'function' && !callbackObj) callback();else callback.apply(callbackObj, Array.prototype.slice.apply(arguments, [2, arguments.length - 1]));
      }
    });
  }

  function addAlert() {
    var alertType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warning';
    var boldText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var stillText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var HTML = "\n      <div class=\"alert alert-".concat(alertType, " alert-dismissible fade show\" role=\"alert\">\n        <strong>").concat(boldText, "</strong> ").concat(stillText, "\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      ");
    $(Selectors.ModalContent).prepend(HTML);
  } // TODO: Do thing thing differently!!!!


  function applyStyle() {
    var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    switch (styleStr) {
      default:
        // go back to default modal css classes
        $(Selectors.Modal).hasClass("d-flex flex-column justify-content-center") && $(Selectors.Modal).removeClass("d-flex flex-column justify-content-center");
        $(Selectors.ModalContent).hasClass("d-flex flex-column justify-content-center align-items-center") && $(Selectors.ModalContent).removeClass("d-flex flex-column justify-content-center align-items-center");
        $(Selectors.ModalBtns).hasClass("d-flex justify-content-center flex-row") && $(Selectors.ModalBtns).removeClass("d-flex justify-content-center flex-row");
        break;
    }
  }

  function getSelectors() {
    return Selectors;
  } // Module self-initialization


  $(Selectors.ModalContainer).hide(); // set up close btn event listener

  $('body').on('click', Selectors.CloseModalBtn, function () {
    hide(clearModal);
  }); // set the def class on modal if not present

  !$(Selectors.Modal).hasClass("p-4") && $(Selectors.Modal).addClass("p-4"); // Interface

  return {
    hide: hide,
    show: show,
    clearModal: clearModal,
    populateModal: populateModal,
    getSelectors: getSelectors,
    hideAndClear: hideAndClear,
    addAlert: addAlert,
    applyStyle: applyStyle
  };
}();

/***/ }),

/***/ "./src/js/Helpers/cookie.js":
/*!**********************************!*\
  !*** ./src/js/Helpers/cookie.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "checkCookie": () => (/* binding */ checkCookie)
/* harmony export */ });
function setCookie(cname, cvalue, exseconds) {
  var d = new Date();
  d.setTime(d.getTime() + exseconds * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(cookieName) {
  return getCookie(cookieName) !== null ? true : false;
}

function getCookie(cookieName) {
  var cookieStrArr = document.cookie.split(";");
  cookieStrArr = cookieStrArr.map(function (fullCookieStr) {
    if (fullCookieStr[0] === " ") {
      return fullCookieStr.substring(1, fullCookieStr.length);
    } else {
      return fullCookieStr;
    }
  });
  var foundCookieVal = null;
  cookieStrArr.forEach(function (cookieStr) {
    var parsedCookieArr = cookieStr.split("=");

    if (parsedCookieArr[0] === cookieName) {
      foundCookieVal = parsedCookieArr[1];
    }
  });
  return foundCookieVal;
}



/***/ }),

/***/ "./src/js/export.js":
/*!**************************!*\
  !*** ./src/js/export.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateController": () => (/* reexport safe */ _Controllers_StateController__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "AuthController": () => (/* reexport safe */ _Controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "NotificationController": () => (/* reexport safe */ _Controllers_NotificationCtr_NotificationController__WEBPACK_IMPORTED_MODULE_2__.NotificationController),
/* harmony export */   "Loader": () => (/* reexport safe */ _Helpers_Loader__WEBPACK_IMPORTED_MODULE_3__.Loader),
/* harmony export */   "Modal": () => (/* reexport safe */ _Helpers_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal)
/* harmony export */ });
/* harmony import */ var _Controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/AuthController */ "./src/js/Controllers/AuthController.js");
/* harmony import */ var _Controllers_StateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/StateController */ "./src/js/Controllers/StateController.js");
/* harmony import */ var _Controllers_NotificationCtr_NotificationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/NotificationCtr/NotificationController */ "./src/js/Controllers/NotificationCtr/NotificationController.js");
/* harmony import */ var _Helpers_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers/Loader */ "./src/js/Helpers/Loader.js");
/* harmony import */ var _Helpers_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Helpers/Modal */ "./src/js/Helpers/Modal.js");
// main Controllers

 // Notification controller

 // Helpers





/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvbnRyb2xsZXJzL05vdGlmaWNhdGlvbkN0ci9Ob3RpZmljYXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Db250cm9sbGVycy9Ob3RpZmljYXRpb25DdHIvVG9wQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Db250cm9sbGVycy9TdGF0ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hlbHBlcnMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9IZWxwZXJzL01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9IZWxwZXJzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXhwb3J0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRDb29raWUiLCJzZXRDb29raWUiLCJBdXRoQ29udHJvbGxlciIsImxvZ2luIiwidXNlcm5hbWUiLCJwcm9tcHQiLCJwYXNzd29yZCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwicmVkaXJlY3RlZCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwidXJsIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9nb3V0IiwicmVnaXN0ZXIiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicmVkaXJlY3QiLCJqc29uIiwibG9nIiwiTm90aWZpY2F0aW9uQ29udHJvbGxlciIsIlRvcEJhciIsInNob3ciLCJoaWRlIiwic2V0VGV4dCIsIm1zZyIsIlN0YXRlQ29udHJvbGxlckNsYXNzIiwibmV3U3RhdGUiLCJzdGF0ZSIsImZpcmUiLCJzdWJzQXJyIiwic3ViIiwiZm4iLCJ0aGF0Iiwic3Vic2NyaWJlIiwic3Vic2NyaWJlcnMiLCJwdXNoIiwiZm9yRWFjaCIsImNhbGwiLCJMb2FkZXIiLCJSRUxPQURJTkdfVElNRSIsImxvYWRpbmciLCJsb2FkZXJXcmFwcGVyU2VsZWN0b3IiLCJzaG93TG9hZGVyIiwiY2IiLCIkIiwiZmFkZUluIiwiaGlkZUxvYWRlciIsImZhZGVPdXQiLCJzaW11bGF0ZVJlbG9hZGluZyIsImNhbGxiYWNrIiwiY2FsbGJhY2tPYmplY3QiLCJhcmdzIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImFyZ3NBcnIiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ0b2dnbGVSZWxvYWQiLCJpc1BhZ2VMb2FkaW5nIiwiZ2V0UGFnZUxvYWRpbmdTdGF0dXMiLCJzZXRQYWdlTG9hZGluZ1N0YXR1cyIsInN0YXR1cyIsIk1vZGFsIiwiTW9kYWxTdGF0dXMiLCJpc09wZW5lZCIsIlNlbGVjdG9ycyIsIk1vZGFsQ29udGVudCIsIk1vZGFsQ29udGFpbmVyIiwiQ2xvc2VNb2RhbEJ0biIsIk1vZGFsVGl0bGUiLCJNb2RhbEJ0bnMiLCJfc2V0SXNPcGVuZWQiLCJib29sIiwiRXJyb3IiLCJwb3B1bGF0ZU1vZGFsIiwidGl0bGUiLCJjb250ZW50SHRtbCIsImJ0bnNIdG1sIiwiaHRtbCIsImNsZWFyTW9kYWwiLCJhcHBseVN0eWxlIiwiaGlkZUFuZENsZWFyIiwiY2FsbGJhY2tPYmoiLCJsZW5ndGgiLCJhZGRBbGVydCIsImFsZXJ0VHlwZSIsImJvbGRUZXh0Iiwic3RpbGxUZXh0IiwiSFRNTCIsInByZXBlbmQiLCJzdHlsZVN0ciIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJnZXRTZWxlY3RvcnMiLCJvbiIsImFkZENsYXNzIiwiY25hbWUiLCJjdmFsdWUiLCJleHNlY29uZHMiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvVVRDU3RyaW5nIiwiY29va2llIiwiY2hlY2tDb29raWUiLCJjb29raWVOYW1lIiwiY29va2llU3RyQXJyIiwic3BsaXQiLCJtYXAiLCJmdWxsQ29va2llU3RyIiwic3Vic3RyaW5nIiwiZm91bmRDb29raWVWYWwiLCJjb29raWVTdHIiLCJwYXJzZWRDb29raWVBcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztlQUtJQSxtQkFBTyxDQUFDLHFEQUFELEM7SUFGUEMsUyxZQUFBQSxTO0lBQ0FDLFMsWUFBQUEsUzs7QUFHSixJQUFNQyxjQUFjLEdBQUksWUFBVztBQUNuQyxXQUFTQyxLQUFULEdBQWlCO0FBQ2I7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFDLGdCQUFELEVBQW1CLE1BQW5CLENBQXZCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHO0FBQ1RILGNBQVEsRUFBUkEsUUFEUztBQUVURSxjQUFRLEVBQVJBO0FBRlMsS0FBYjtBQUtBRSxTQUFLLENBQUMsYUFBRCxFQUFnQjtBQUNqQkMsWUFBTSxFQUFFLE1BRFM7QUFDRDtBQUNoQkMsVUFBSSxFQUFFLE1BRlc7QUFFSDtBQUNkQyxXQUFLLEVBQUUsVUFIVTtBQUdFO0FBQ25CQyxpQkFBVyxFQUFFLGFBSkk7QUFJVztBQUM1QkMsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FMUTtBQVFqQkMsb0JBQWMsRUFBRSxhQVJDO0FBUWM7QUFDL0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQWYsQ0FUVyxDQVNVOztBQVRWLEtBQWhCLENBQUwsQ0FXQ1csSUFYRCxDQVdNLFVBQUNDLEdBQUQsRUFBUztBQUNYLFVBQUdBLEdBQUcsQ0FBQ0MsVUFBSixLQUFtQixJQUF0QixFQUNJQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCSixHQUFHLENBQUNLLEdBQTdCO0FBQ1AsS0FkRCxXQWVPLFVBQUFDLEdBQUc7QUFBQSxh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UixVQUExQixFQUFzQztBQUNsQ00sb0JBQWMsR0FBR0UsZUFBZSxDQUFDLENBQUQsQ0FBaEM7QUFDSDtBQUNKLEdBTEQ7QUFPQSxTQUFPRixjQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7Q0FHQTs7Q0FJQTs7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19qc19leHBvcnRfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW50ZXJmYWNlXG4vLyBsb2dpbiwgbG9nb3V0IC0+IHNxbGl0ZSArIHBhc3Nwb3J0XG5cbmltcG9ydCBTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vU3RhdGVDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgXG4gICAgZ2V0Q29va2llLCBcbiAgICBzZXRDb29raWUgXG59ID0gcmVxdWlyZShcIi4uL0hlbHBlcnMvY29va2llXCIpO1xuXG5jb25zdCBBdXRoQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbmZ1bmN0aW9uIGxvZ2luKCkge1xuICAgIC8vIHNldENvb2tpZShcInNlc3Npb25JRFwiLCBcIjkxODgyN1wiLCA1KTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb21wdChcIllvdXIgVXNlcm5hbWU6XCIsIFwidGVzdFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHByb21wdChcIllvdXIgUGFzc3dvcmQ6XCIsIFwidGVzdFwiKTtcbiAgICBjb25zdCBkYXRhID0geyBcbiAgICAgICAgdXNlcm5hbWUsIFxuICAgICAgICBwYXNzd29yZCBcbiAgICB9O1xuXG4gICAgZmV0Y2goXCIvYXV0aC9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmKHJlcy5yZWRpcmVjdGVkID09PSB0cnVlKSBcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG4gICAgLy8gU3RhdGVDb250cm9sbGVyLnNldCh7XG4gICAgLy8gICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgLy8gfSlcbn1cblxuZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoL2xvZ291dFwiO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICAvLyBnZXQgZmllbGRzIHZhbHNcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLnZhbHVlO1xuXG4gICAgZmV0Y2goXCIvYXV0aC9yZWdpc3RlclwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gZXJyLmpzb24oKSlcbn1cblxucmV0dXJuIHtcbiAgICBsb2dpbiwgXG4gICAgbG9nb3V0LCBcbiAgICByZWdpc3RlclxufVxuXG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250cm9sbGVyOyIsIi8vIHVpIGVsZW1zXG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tIFwiLi9Ub3BCYXJcIjtcblxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICAvLyAyIHR5cGVzIFxuICAgIC8vIHRvcGJhciBcbiAgICAvLyBkaXNtaXNzYWJsZSBtb2RhbC5cblxufSkoKTsgIiwiZXhwb3J0IGNvbnN0IFRvcEJhciA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUZXh0KG1zZykge1xuICAgICAgICAvLyBzZXQgdGV4dCBpbiBVSSBlbGVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvdyxcbiAgICAgICAgaGlkZSxcbiAgICAgICAgc2V0VGV4dFxuICAgIH1cblxufSkoKTsiLCJjbGFzcyBTdGF0ZUNvbnRyb2xsZXJDbGFzcyB7XG4gIHN0YXRlID0ge31cblxuICBzZXQgPSAobmV3U3RhdGUpID0+IHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIC4uLm5ld1N0YXRlLFxuICAgIH1cbiAgICB0aGlzLmZpcmUodGhpcy5zdGF0ZSlcbiAgfVxuXG4gIGdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICB9XG5cbiAgc3Vic2NyaWJlcnMgPSBbXVxuXG4gIHN1YnNjcmliZUFsbCA9IChzdWJzQXJyKSA9PiB7XG4gICAgZm9yKGNvbnN0IHN1YiBvZiBzdWJzQXJyKSB7XG4gICAgICBjb25zdCB7IGZuLCB0aGF0IH0gPSBzdWI7XG4gICAgICB0aGlzLnN1YnNjcmliZShmbiwgdGhhdCk7XG4gICAgfVxuICB9XG5cbiAgc3Vic2NyaWJlID0gKGZuLCB0aGF0ID0gbnVsbCkgPT4ge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaCh7IGZuLCB0aGF0IH0pXG4gIH1cbiAgXG4gIGZpcmUgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoeyBmbiwgdGhhdCB9KSA9PiB7XG4gICAgICBmbi5jYWxsKHRoYXQsIGRhdGEpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhdGVDb250cm9sbGVyQ2xhc3MoKVxuIiwiXG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY29uc3QgUkVMT0FESU5HX1RJTUUgPSA3MDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgbGV0IGxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGxvYWRlcldyYXBwZXJTZWxlY3RvciA9ICcjbG9hZGVyX3dyYXBwZXInO1xuXG4gICAgZnVuY3Rpb24gc2hvd0xvYWRlciggY2IgPSBudWxsICkge1xuICAgICAgICBpZihjYilcbiAgICAgICAgICAgICQobG9hZGVyV3JhcHBlclNlbGVjdG9yKS5mYWRlSW4oJ3Nsb3cnLCBjYik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQobG9hZGVyV3JhcHBlclNlbGVjdG9yKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCBjYiA9IG51bGwgKSB7XG4gICAgICAgIGlmKGNiKVxuICAgICAgICAgICAgJChsb2FkZXJXcmFwcGVyU2VsZWN0b3IpLmZhZGVPdXQoJ3Nsb3cnLCBjYik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQobG9hZGVyV3JhcHBlclNlbGVjdG9yKS5mYWRlT3V0KCdzbG93Jyk7XG4gICAgfVxuICAgIC8vIFB1YmxpY1xuICAgIGZ1bmN0aW9uIHNpbXVsYXRlUmVsb2FkaW5nKGNhbGxiYWNrLCBjYWxsYmFja09iamVjdCwgYXJncykge1xuICAgICAgICBzaG93TG9hZGVyKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nIFxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJyBcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgY2FsbGJhY2tPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgLy8gR2V0IGFsbCBhcmd1bWVudHMgaW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3NBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlbiBhcnJheSBvZiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrT2JqZWN0LCBhcmdzQXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nIFxuICAgICAgICAgICAgICAgICAgICAmJiB0eXBlb2YgY2FsbGJhY2tPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tPYmplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgIH0sIFJFTE9BRElOR19USU1FKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVSZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBnZXRQYWdlTG9hZGluZ1N0YXR1cygpO1xuICAgICAgICBpZiAoaXNQYWdlTG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZsaXAgdGhlIHBhZ2UgbG9hZGluZyBzdGF0dXNcbiAgICAgICAgc2V0UGFnZUxvYWRpbmdTdGF0dXMoIWlzUGFnZUxvYWRpbmcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2VMb2FkaW5nU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpIHtcbiAgICAgICAgbG9hZGluZyA9IHN0YXR1cztcbiAgICB9XG5cblxuICAgIGhpZGVMb2FkZXIoKTtcblxuICAgIC8vIEludGVyZmFjZVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2VMb2FkaW5nU3RhdHVzLFxuICAgICAgICBzZXRQYWdlTG9hZGluZ1N0YXR1cyxcbiAgICAgICAgdG9nZ2xlUmVsb2FkLFxuICAgICAgICBzaW11bGF0ZVJlbG9hZGluZyxcbiAgICAgICAgc2hvd0xvYWRlcixcbiAgICAgICAgaGlkZUxvYWRlclxuICAgIH1cblxufSkoKTtcbiIsIlxuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBNb2RhbFN0YXR1cyA9IHtcbiAgICAgICAgaXNPcGVuZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IFNlbGVjdG9ycyA9IHtcbiAgICAgICAgTW9kYWxDb250ZW50OiAnI01vZGFsQ29udGVudCcsXG4gICAgICAgIE1vZGFsQ29udGFpbmVyOiAnLm1vZGFsX2NvbnRhaW5lcicsXG4gICAgICAgIENsb3NlTW9kYWxCdG46ICcuY2xvc2VNb2RhbEJ0bicsXG4gICAgICAgIE1vZGFsVGl0bGU6ICcjbW9kYWxUaXRsZScsXG4gICAgICAgIE1vZGFsQnRuczogXCIjTW9kYWxCdG5zXCIsXG4gICAgICAgIE1vZGFsOiBcIiNtb2RhbFwiXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9zZXRJc09wZW5lZChib29sKSB7XG4gICAgICAgICBpZih0eXBlb2YgYm9vbCA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICBNb2RhbFN0YXR1cy5pc09wZW5lZCA9ICFNb2RhbFN0YXR1cy5pc09wZW5lZDtcbiAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgd2FzIHBhc3NlZCB0byBfc2V0SXNPcGVuZWQgZnVuY3Rpb24hISFcIik7XG4gICAgfVxuICAgIC8vIFB1YmxpY1xuICAgIGZ1bmN0aW9uIHBvcHVsYXRlTW9kYWwodGl0bGUsIGNvbnRlbnRIdG1sLCBidG5zSHRtbCkge1xuICAgICAgICAvLyBDaGFuZ2UgTW9kYWwgVGl0bGVcbiAgICAgICAgJChTZWxlY3RvcnMuTW9kYWxUaXRsZSkuaHRtbCh0aXRsZSk7XG4gICAgICAgIC8vIHBvcHVsYXRlIE1vZGFsQ29udGVudCB3aXRoIGh0bWwgY29udGVudFxuICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbENvbnRlbnQpLmh0bWwoY29udGVudEh0bWwpO1xuICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbEJ0bnMpLmh0bWwoYnRuc0h0bWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kYWwoKSB7XG4gICAgICAgICQoU2VsZWN0b3JzLk1vZGFsVGl0bGUpLmh0bWwoJycpO1xuICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbENvbnRlbnQpLmh0bWwoJycpO1xuICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbEJ0bnMpLmh0bWwoJycpO1xuICAgICAgICAvLyBhcHBseSBkZWZhdWx0IG1vZGFsIHN0eWxlXG4gICAgICAgIGFwcGx5U3R5bGUoXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBbmRDbGVhcigpIHtcbiAgICAgICQoU2VsZWN0b3JzLk1vZGFsQ29udGFpbmVyKS5mYWRlT3V0KCA3MDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGNoYW5nZSBtb2RhbE9wZW5lZCBzdGF0dXNcbiAgICAgICAgICAgICAgX3NldElzT3BlbmVkKGZhbHNlKTtcbiAgICAgICAgICAvLyBjbGVhciB0aGUgbW9kYWxcbiAgICAgICAgICAgICAgY2xlYXJNb2RhbCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdyhjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgJChTZWxlY3RvcnMuTW9kYWxDb250YWluZXIpLmZhZGVJbiggNzAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSBtb2RhbE9wZW5lZCBzdGF0dXNcbiAgICAgICAgICAgICAgICBfc2V0SXNPcGVuZWQodHJ1ZSk7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2FsbGJhY2sgZnVuY1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZShjYWxsYmFjayA9IG51bGwsIGNhbGxiYWNrT2JqID0gbnVsbCwgLi4uYXJncykge1xuICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbENvbnRhaW5lcikuZmFkZU91dCggNzAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSBtb2RhbE9wZW5lZCBzdGF0dXNcbiAgICAgICAgICAgICAgICBfc2V0SXNPcGVuZWQoZmFsc2UpO1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNhbGxiYWNrIGZ1bmNcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrIHx8IGNhbGxiYWNrT2JqKSB7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhY2FsbGJhY2tPYmopXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrT2JqLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzLCBbMiwgYXJndW1lbnRzLmxlbmd0aCAtIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEFsZXJ0KGFsZXJ0VHlwZSA9ICd3YXJuaW5nJywgYm9sZFRleHQgPSAnJywgc3RpbGxUZXh0ID0gJycpIHtcbiAgICAgIGNvbnN0IEhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHthbGVydFR5cGV9IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICA8c3Ryb25nPiR7Ym9sZFRleHR9PC9zdHJvbmc+ICR7c3RpbGxUZXh0fVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcblxuICAgICAgJChTZWxlY3RvcnMuTW9kYWxDb250ZW50KS5wcmVwZW5kKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IERvIHRoaW5nIHRoaW5nIGRpZmZlcmVudGx5ISEhIVxuICAgIGZ1bmN0aW9uIGFwcGx5U3R5bGUoc3R5bGVTdHIgPSBudWxsKSB7XG5cbiAgICAgICAgc3dpdGNoKHN0eWxlU3RyKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGdvIGJhY2sgdG8gZGVmYXVsdCBtb2RhbCBjc3MgY2xhc3Nlc1xuICAgICAgICAgICAgICAgICQoU2VsZWN0b3JzLk1vZGFsKS5oYXNDbGFzcyhcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIpICYmICQoU2VsZWN0b3JzLk1vZGFsKS5yZW1vdmVDbGFzcyhcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIpO1xuICAgICAgICAgICAgICAgICQoU2VsZWN0b3JzLk1vZGFsQ29udGVudCkuaGFzQ2xhc3MoXCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIikgJiYgJChTZWxlY3RvcnMuTW9kYWxDb250ZW50KS5yZW1vdmVDbGFzcyhcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgICAgICAgICAkKFNlbGVjdG9ycy5Nb2RhbEJ0bnMpLmhhc0NsYXNzKFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1yb3dcIikgJiYgJChTZWxlY3RvcnMuTW9kYWxCdG5zKS5yZW1vdmVDbGFzcyhcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtcm93XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKCkge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3JzO1xuICAgIH1cblxuICAgIC8vIE1vZHVsZSBzZWxmLWluaXRpYWxpemF0aW9uXG4gICAgJChTZWxlY3RvcnMuTW9kYWxDb250YWluZXIpLmhpZGUoKTtcblxuICAgIC8vIHNldCB1cCBjbG9zZSBidG4gZXZlbnQgbGlzdGVuZXJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgU2VsZWN0b3JzLkNsb3NlTW9kYWxCdG4sIGZ1bmN0aW9uKCkge1xuICAgICAgICBoaWRlKGNsZWFyTW9kYWwpOyAgIFxuICAgIH0pO1xuICAgIC8vIHNldCB0aGUgZGVmIGNsYXNzIG9uIG1vZGFsIGlmIG5vdCBwcmVzZW50XG4gICAgISggJChTZWxlY3RvcnMuTW9kYWwpLmhhc0NsYXNzKFwicC00XCIpICkgJiYgJChTZWxlY3RvcnMuTW9kYWwpLmFkZENsYXNzKFwicC00XCIpO1xuXG4gICAgLy8gSW50ZXJmYWNlXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGlkZSxcbiAgICAgICAgc2hvdyxcbiAgICAgICAgY2xlYXJNb2RhbCxcbiAgICAgICAgcG9wdWxhdGVNb2RhbCxcbiAgICAgICAgZ2V0U2VsZWN0b3JzLFxuICAgICAgICBoaWRlQW5kQ2xlYXIsXG4gICAgICAgIGFkZEFsZXJ0LFxuICAgICAgICBhcHBseVN0eWxlXG4gICAgfVxufSkoKVxuIiwiZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4c2Vjb25kcykge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHNlY29uZHMgKiAxMDAwKSk7XG4gICAgbGV0IGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZC50b1VUQ1N0cmluZygpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tDb29raWUoY29va2llTmFtZSkge1xuICAgIHJldHVybiBnZXRDb29raWUoY29va2llTmFtZSkgIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldENvb2tpZShjb29raWVOYW1lKSB7XG4gICAgbGV0IGNvb2tpZVN0ckFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgY29va2llU3RyQXJyID0gY29va2llU3RyQXJyLm1hcCgoZnVsbENvb2tpZVN0cikgPT4ge1xuICAgICAgICBpZihmdWxsQ29va2llU3RyWzBdID09PSBcIiBcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bGxDb29raWVTdHIuc3Vic3RyaW5nKDEsIGZ1bGxDb29raWVTdHIubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdWxsQ29va2llU3RyO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBmb3VuZENvb2tpZVZhbCA9IG51bGw7ICAgIFxuICAgIGNvb2tpZVN0ckFyci5mb3JFYWNoKChjb29raWVTdHIpPT4ge1xuICAgICAgICBsZXQgcGFyc2VkQ29va2llQXJyID0gY29va2llU3RyLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYocGFyc2VkQ29va2llQXJyWzBdID09PSBjb29raWVOYW1lKSB7XG4gICAgICAgICAgICBmb3VuZENvb2tpZVZhbCA9IHBhcnNlZENvb2tpZUFyclsxXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvdW5kQ29va2llVmFsO1xufVxuXG5leHBvcnQge1xuICAgIGdldENvb2tpZSxcbiAgICBzZXRDb29raWUsXG4gICAgY2hlY2tDb29raWVcbn0iLCJcbi8vIG1haW4gQ29udHJvbGxlcnNcbmltcG9ydCBBdXRoQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9BdXRoQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0YXRlQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVycy9TdGF0ZUNvbnRyb2xsZXJcIjtcblxuLy8gTm90aWZpY2F0aW9uIGNvbnRyb2xsZXJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9Ob3RpZmljYXRpb25DdHIvTm90aWZpY2F0aW9uQ29udHJvbGxlclwiO1xuXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL0hlbHBlcnMvTG9hZGVyXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL0hlbHBlcnMvTW9kYWxcIjtcblxuZXhwb3J0IHsgXG4gICAgU3RhdGVDb250cm9sbGVyLCBcbiAgICBBdXRoQ29udHJvbGxlciwgXG4gICAgTm90aWZpY2F0aW9uQ29udHJvbGxlcixcbiAgICBMb2FkZXIsXG4gICAgTW9kYWxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==