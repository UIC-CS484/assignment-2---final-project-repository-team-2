self["webpackHotUpdate"]("index",{

/***/ "./src/pages/index/js/main.js":
/*!************************************!*\
  !*** ./src/pages/index/js/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/export */ "./src/js/export.js");
/* harmony import */ var _ButtonsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonsController */ "./src/pages/index/js/ButtonsController.js");
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UIController */ "./src/pages/index/js/UIController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// boostrap js
 // css




 // all ui components


_js_export__WEBPACK_IMPORTED_MODULE_3__.StateController.subscribe(_UIController__WEBPACK_IMPORTED_MODULE_5__.default.stateChanged, _UIController__WEBPACK_IMPORTED_MODULE_5__.default); // on bootup
// fetch items

function bootup() {
  return _bootup.apply(this, arguments);
}

function _bootup() {
  _bootup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var profileRes, profile, itemsRes, items, heroesRes, heroes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/profile");

          case 2:
            profileRes = _context.sent;
            _context.next = 5;
            return profileRes.json();

          case 5:
            profile = _context.sent;
            _js_export__WEBPACK_IMPORTED_MODULE_3__.StateController.set({
              profile: profile
            });
            _context.next = 9;
            return fetch("/game/user/items");

          case 9:
            itemsRes = _context.sent;
            _context.next = 12;
            return itemsRes.json();

          case 12:
            items = _context.sent;
            _context.next = 15;
            return fetch("/game/user/heroes");

          case 15:
            heroesRes = _context.sent;
            _context.next = 18;
            return heroesRes.json();

          case 18:
            heroes = _context.sent;
            _js_export__WEBPACK_IMPORTED_MODULE_3__.StateController.set({
              items: items,
              profile: profile,
              heroes: heroes
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _bootup.apply(this, arguments);
}

bootup();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fffe8fc35e2ebf4271b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIlN0YXRlQ29udHJvbGxlciIsIlVJQ29udHJvbGxlciIsImJvb3R1cCIsImZldGNoIiwicHJvZmlsZVJlcyIsImpzb24iLCJwcm9maWxlIiwiaXRlbXNSZXMiLCJpdGVtcyIsImhlcm9lc1JlcyIsImhlcm9lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUlBO0NBRUE7O0FBQ0E7QUFDQUEsaUVBQUEsQ0FBMEJDLCtEQUExQixFQUFxREEsa0RBQXJELEUsQ0FFQTtBQUNBOztTQUNlQyxNOzs7OztvRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUU2QkMsS0FBSyxDQUFDLFVBQUQsQ0FGbEM7O0FBQUE7QUFFVUMsc0JBRlY7QUFBQTtBQUFBLG1CQUcwQkEsVUFBVSxDQUFDQyxJQUFYLEVBSDFCOztBQUFBO0FBR1VDLG1CQUhWO0FBSUlOLHVFQUFBLENBQW9CO0FBQUVNLHFCQUFPLEVBQVBBO0FBQUYsYUFBcEI7QUFKSjtBQUFBLG1CQU0yQkgsS0FBSyxDQUFDLGtCQUFELENBTmhDOztBQUFBO0FBTVVJLG9CQU5WO0FBQUE7QUFBQSxtQkFPd0JBLFFBQVEsQ0FBQ0YsSUFBVCxFQVB4Qjs7QUFBQTtBQU9VRyxpQkFQVjtBQUFBO0FBQUEsbUJBVTRCTCxLQUFLLENBQUMsbUJBQUQsQ0FWakM7O0FBQUE7QUFVVU0scUJBVlY7QUFBQTtBQUFBLG1CQVd5QkEsU0FBUyxDQUFDSixJQUFWLEVBWHpCOztBQUFBO0FBV1VLLGtCQVhWO0FBYUlWLHVFQUFBLENBQW9CO0FBQUVRLG1CQUFLLEVBQUxBLEtBQUY7QUFBU0YscUJBQU8sRUFBUEEsT0FBVDtBQUFrQkksb0JBQU0sRUFBTkE7QUFBbEIsYUFBcEI7O0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWdCQVIsTUFBTSxHOzs7Ozs7Ozs7O1VDaENOLHNEIiwiZmlsZSI6ImluZGV4LjcxZGQyMjUwMzMyYTJjZWZmOWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib29zdHJhcCBqc1xuaW1wb3J0ICdib290c3RyYXAnO1xuLy8gY3NzXG5pbXBvcnQgXCJjb3JlLWpzL3N0YWJsZVwiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5cblxuXG5pbXBvcnQgeyBTdGF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9qcy9leHBvcnQnO1xuaW1wb3J0IEJ1dHRvbnNDb250cm9sbGVyIGZyb20gJy4vQnV0dG9uc0NvbnRyb2xsZXInO1xuLy8gYWxsIHVpIGNvbXBvbmVudHNcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSAnLi9VSUNvbnRyb2xsZXInO1xuU3RhdGVDb250cm9sbGVyLnN1YnNjcmliZShVSUNvbnRyb2xsZXIuc3RhdGVDaGFuZ2VkLCBVSUNvbnRyb2xsZXIpO1xuXG4vLyBvbiBib290dXBcbi8vIGZldGNoIGl0ZW1zXG5hc3luYyBmdW5jdGlvbiBib290dXAoKSB7XG5cbiAgICBjb25zdCBwcm9maWxlUmVzID0gYXdhaXQgZmV0Y2goXCIvcHJvZmlsZVwiKTtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJvZmlsZVJlcy5qc29uKCk7XG4gICAgU3RhdGVDb250cm9sbGVyLnNldCh7IHByb2ZpbGUgfSk7XG4gICAgXG4gICAgY29uc3QgaXRlbXNSZXMgPSBhd2FpdCBmZXRjaChcIi9nYW1lL3VzZXIvaXRlbXNcIik7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBpdGVtc1Jlcy5qc29uKCk7XG5cbiAgICBcbiAgICBjb25zdCBoZXJvZXNSZXMgPSBhd2FpdCBmZXRjaChcIi9nYW1lL3VzZXIvaGVyb2VzXCIpO1xuICAgIGNvbnN0IGhlcm9lcyA9IGF3YWl0IGhlcm9lc1Jlcy5qc29uKCk7XG5cbiAgICBTdGF0ZUNvbnRyb2xsZXIuc2V0KHsgaXRlbXMsIHByb2ZpbGUsIGhlcm9lcyB9KTtcbn1cblxuYm9vdHVwKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZmZlOGZjMzVlMmViZjQyNzFiOFwiKSJdLCJzb3VyY2VSb290IjoiIn0=