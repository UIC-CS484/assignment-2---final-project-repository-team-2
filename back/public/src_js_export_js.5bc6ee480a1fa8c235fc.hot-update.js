self["webpackHotUpdate"]("src_js_export_js",{

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImdldENvb2tpZSIsInNldENvb2tpZSIsIkF1dGhDb250cm9sbGVyIiwibG9naW4iLCJ1c2VybmFtZSIsInByb21wdCIsInBhc3N3b3JkIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJyZWRpcmVjdGVkIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmwiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2dvdXQiLCJyZWdpc3RlciIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJyZWRpcmVjdCIsImpzb24iLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztlQUtJQSxtQkFBTyxDQUFDLHFEQUFELEM7SUFGUEMsUyxZQUFBQSxTO0lBQ0FDLFMsWUFBQUEsUzs7QUFHSixJQUFNQyxjQUFjLEdBQUksWUFBVztBQUNuQyxXQUFTQyxLQUFULEdBQWlCO0FBQ2I7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFDLGdCQUFELEVBQW1CLE1BQW5CLENBQXZCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHO0FBQ1RILGNBQVEsRUFBUkEsUUFEUztBQUVURSxjQUFRLEVBQVJBO0FBRlMsS0FBYjtBQUtBRSxTQUFLLENBQUMsYUFBRCxFQUFnQjtBQUNqQkMsWUFBTSxFQUFFLE1BRFM7QUFDRDtBQUNoQkMsVUFBSSxFQUFFLE1BRlc7QUFFSDtBQUNkQyxXQUFLLEVBQUUsVUFIVTtBQUdFO0FBQ25CQyxpQkFBVyxFQUFFLGFBSkk7QUFJVztBQUM1QkMsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FMUTtBQVFqQkMsb0JBQWMsRUFBRSxhQVJDO0FBUWM7QUFDL0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQWYsQ0FUVyxDQVNVOztBQVRWLEtBQWhCLENBQUwsQ0FXQ1csSUFYRCxDQVdNLFVBQUNDLEdBQUQsRUFBUztBQUNYLFVBQUdBLEdBQUcsQ0FBQ0MsVUFBSixLQUFtQixJQUF0QixFQUNJQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCSixHQUFHLENBQUNLLEdBQTdCO0FBQ1AsS0FkRCxXQWVPLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFKO0FBQUEsS0FmVixFQVRhLENBMEJiO0FBQ0E7QUFDQTtBQUNIOztBQUVELFdBQVNHLE1BQVQsR0FBa0I7QUFDZFAsWUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5QixjQUF6QjtBQUNIOztBQUVELFdBQVNNLFFBQVQsR0FBb0I7QUFDaEI7QUFDQSxRQUFNekIsUUFBUSxHQUFHaUIsUUFBUSxDQUFDUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFyRDtBQUNBLFFBQU16QixRQUFRLEdBQUdlLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBckQ7QUFFQXZCLFNBQUssQ0FBQyxnQkFBRCxFQUFtQjtBQUNwQkMsWUFBTSxFQUFFLE1BRFk7QUFDSjtBQUNoQkMsVUFBSSxFQUFFLE1BRmM7QUFFTjtBQUNkQyxXQUFLLEVBQUUsVUFIYTtBQUdEO0FBQ25CQyxpQkFBVyxFQUFFLGFBSk87QUFJUTtBQUM1QkMsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FMVztBQVFwQm1CLGNBQVEsRUFBRSxRQVJVO0FBUUE7QUFDcEJsQixvQkFBYyxFQUFFLGFBVEk7QUFTVztBQUMvQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmIsZ0JBQVEsRUFBUkEsUUFEaUI7QUFFakJFLGdCQUFRLEVBQVJBO0FBRmlCLE9BQWYsQ0FWYyxDQWFqQjs7QUFiaUIsS0FBbkIsQ0FBTCxDQWVDWSxJQWZELENBZU0sVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ2MsSUFBSixFQUFKO0FBQUEsS0FmVCxFQWdCQ2YsSUFoQkQsQ0FnQk0sVUFBQVgsSUFBSTtBQUFBLGFBQUltQixPQUFPLENBQUNRLEdBQVIsQ0FBWTNCLElBQVosQ0FBSjtBQUFBLEtBaEJWLFdBaUJPLFVBQUFrQixHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDUSxJQUFKLEVBQUo7QUFBQSxLQWpCVjtBQWtCSDs7QUFFRCxTQUFPO0FBQ0g5QixTQUFLLEVBQUxBLEtBREc7QUFFSHlCLFVBQU0sRUFBTkEsTUFGRztBQUdIQyxZQUFRLEVBQVJBO0FBSEcsR0FBUDtBQU1DLENBbkVzQixFQUF2Qjs7QUFzRUEsaUVBQWUzQixjQUFmLEUiLCJmaWxlIjoic3JjX2pzX2V4cG9ydF9qcy41YmM2ZWU0ODBhMWZhOGMyMzVmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW50ZXJmYWNlXG4vLyBsb2dpbiwgbG9nb3V0IC0+IHNxbGl0ZSArIHBhc3Nwb3J0XG5cbmltcG9ydCBTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vU3RhdGVDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgXG4gICAgZ2V0Q29va2llLCBcbiAgICBzZXRDb29raWUgXG59ID0gcmVxdWlyZShcIi4uL0hlbHBlcnMvY29va2llXCIpO1xuXG5jb25zdCBBdXRoQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbmZ1bmN0aW9uIGxvZ2luKCkge1xuICAgIC8vIHNldENvb2tpZShcInNlc3Npb25JRFwiLCBcIjkxODgyN1wiLCA1KTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb21wdChcIllvdXIgVXNlcm5hbWU6XCIsIFwidGVzdFwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHByb21wdChcIllvdXIgUGFzc3dvcmQ6XCIsIFwidGVzdFwiKTtcbiAgICBjb25zdCBkYXRhID0geyBcbiAgICAgICAgdXNlcm5hbWUsIFxuICAgICAgICBwYXNzd29yZCBcbiAgICB9O1xuXG4gICAgZmV0Y2goXCIvYXV0aC9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmKHJlcy5yZWRpcmVjdGVkID09PSB0cnVlKSBcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG4gICAgLy8gU3RhdGVDb250cm9sbGVyLnNldCh7XG4gICAgLy8gICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgLy8gfSlcbn1cblxuZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoL2xvZ291dFwiO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICAvLyBnZXQgZmllbGRzIHZhbHNcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLnZhbHVlO1xuXG4gICAgZmV0Y2goXCIvYXV0aC9yZWdpc3RlclwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4gZXJyLmpzb24oKSlcbn1cblxucmV0dXJuIHtcbiAgICBsb2dpbiwgXG4gICAgbG9nb3V0LCBcbiAgICByZWdpc3RlclxufVxuXG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250cm9sbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=