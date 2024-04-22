"use strict";
(self["webpackChunkpageproject"] = self["webpackChunkpageproject"] || []).push([["clearContainers"],{

/***/ "./src/clearContainers.js":
/*!********************************!*\
  !*** ./src/clearContainers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContainers)
/* harmony export */ });
function clearContainers() {

/* limpia el contenido anterior */
    let contentInfo = document.getElementById('showinfo');
    contentInfo.remove();
/* crea un nuevo container */
    const element = document.querySelector('.container');
    const introduction = document.createElement('div');
  
    introduction.classList.add('intro');
    introduction.setAttribute('id','showinfo');
  

    element.appendChild(introduction);
   
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/clearContainers.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJDb250YWluZXJzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWdlcHJvamVjdC8uL3NyYy9jbGVhckNvbnRhaW5lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250YWluZXJzKCkge1xyXG5cclxuLyogbGltcGlhIGVsIGNvbnRlbmlkbyBhbnRlcmlvciAqL1xyXG4gICAgbGV0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dpbmZvJyk7XHJcbiAgICBjb250ZW50SW5mby5yZW1vdmUoKTtcclxuLyogY3JlYSB1biBudWV2byBjb250YWluZXIgKi9cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBcclxuICAgIGludHJvZHVjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnRybycpO1xyXG4gICAgaW50cm9kdWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdzaG93aW5mbycpO1xyXG4gIFxyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uKTtcclxuICAgXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=