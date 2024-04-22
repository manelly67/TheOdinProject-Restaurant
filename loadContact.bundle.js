"use strict";
(self["webpackChunkpageproject"] = self["webpackChunkpageproject"] || []).push([["loadContact"],{

/***/ "./src/function3.js":
/*!**************************!*\
  !*** ./src/function3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
   
    const contactContent = document.querySelector('.intro');
    const contactBox = document.createElement('div');
    
    let contacto = 'we are located on the street *** intersection with avenue ****';
    let pedidos = 'for orders call this number 123456789';

    contactBox.classList.add('introBox');
    contactBox.classList.add('contactTex');
    
    contactBox.innerHTML = _.join([contacto,'',pedidos], ' ');

    contactContent.appendChild(contactBox);
   
   
   
    console.log('prueba3');
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/function3.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZENvbnRhY3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhZ2Vwcm9qZWN0Ly4vc3JjL2Z1bmN0aW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgXHJcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRybycpO1xyXG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBsZXQgY29udGFjdG8gPSAnd2UgYXJlIGxvY2F0ZWQgb24gdGhlIHN0cmVldCAqKiogaW50ZXJzZWN0aW9uIHdpdGggYXZlbnVlICoqKionO1xyXG4gICAgbGV0IHBlZGlkb3MgPSAnZm9yIG9yZGVycyBjYWxsIHRoaXMgbnVtYmVyIDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKCdpbnRyb0JveCcpO1xyXG4gICAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKCdjb250YWN0VGV4Jyk7XHJcbiAgICBcclxuICAgIGNvbnRhY3RCb3guaW5uZXJIVE1MID0gXy5qb2luKFtjb250YWN0bywnJyxwZWRpZG9zXSwgJyAnKTtcclxuXHJcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmEzJyk7XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==