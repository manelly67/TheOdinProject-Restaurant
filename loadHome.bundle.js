"use strict";
(self["webpackChunkpageproject"] = self["webpackChunkpageproject"] || []).push([["loadHome"],{

/***/ "./src/function1.js":
/*!**************************!*\
  !*** ./src/function1.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    
    const homeContent = document.querySelector('.intro');
    const homeBox = document.createElement('div');
    
    let home1 = 'international fine cuisine';
    let home2 = 'our dishes are prepared with ingredients from local producers';

    homeBox.classList.add('introBox');
    homeBox.classList.add('contactTex');
    
    homeBox.innerHTML = _.join([home1,'',home2], ' ');

    homeContent.appendChild(homeBox);
   
   
   
    console.log('prueba1');
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/function1.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZEhvbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhZ2Vwcm9qZWN0Ly4vc3JjL2Z1bmN0aW9uMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm8nKTtcclxuICAgIGNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgbGV0IGhvbWUxID0gJ2ludGVybmF0aW9uYWwgZmluZSBjdWlzaW5lJztcclxuICAgIGxldCBob21lMiA9ICdvdXIgZGlzaGVzIGFyZSBwcmVwYXJlZCB3aXRoIGluZ3JlZGllbnRzIGZyb20gbG9jYWwgcHJvZHVjZXJzJztcclxuXHJcbiAgICBob21lQm94LmNsYXNzTGlzdC5hZGQoJ2ludHJvQm94Jyk7XHJcbiAgICBob21lQm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RUZXgnKTtcclxuICAgIFxyXG4gICAgaG9tZUJveC5pbm5lckhUTUwgPSBfLmpvaW4oW2hvbWUxLCcnLGhvbWUyXSwgJyAnKTtcclxuXHJcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob21lQm94KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmExJyk7XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==