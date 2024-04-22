"use strict";
(self["webpackChunkpageproject"] = self["webpackChunkpageproject"] || []).push([["loadMenu"],{

/***/ "./src/function2.js":
/*!**************************!*\
  !*** ./src/function2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
   

    class Dish {
        constructor(dishName, ingredients, price){
          this.dishName= dishName;
          this.ingredients = ingredients;
          this.price = price; 
        };
    }
   
    const dish = new Dish(this.dishName, this.ingredients, this.price);

    const dish1 = new Dish('dark fish', 'a lot of fish', 10);
    const dish2 = new Dish('light pork', 'a lot of pork', 11);
    const dish3 = new Dish('clear chicken', 'a lot of chicken',13);
    const dish4 = new Dish('heavy pasta', 'a lot of pasta',9);
    const dish5 = new Dish('sweet vegetables', 'a lot of vegetables',10);

    let theMenu = [  dish1,   dish2 , dish3, dish4, dish5 ];
    

  
function displayMenu(theMenu, dish) {
  
  const lengthMenu = theMenu.length;
  
  for (let i = 0; i < lengthMenu; i++) {
  
  
  const currentDish = theMenu[i];
  console.log(lengthMenu);
  console.log(dish1);
  console.log(theMenu);
  console.log(currentDish);
  console.log(i);

  const menuContent = document.querySelector('.intro');


  const createDish = document.createElement('div');
  const showName = document.createElement('p');
  const showIngred = document.createElement('p');
  const showPrice = document.createElement('p');
  
  
  menuContent.classList.add('menuContent');
  createDish.classList.add('card');
  createDish.setAttribute('data', i);
  showName.classList.add('showName');
  showIngred.classList.add('showIngred');
  showPrice.classList.add('showPrice');

  showName.innerText = "Dish: " + currentDish.dishName;
  showIngred.innerText = "Ingredients:  " +currentDish.ingredients;
  showPrice.innerText = "Price: " + currentDish.price + " usd";

  
  menuContent.appendChild(createDish);
  createDish.appendChild(showName);
  createDish.appendChild(showIngred);
  createDish.appendChild(showPrice);
  

  }
}
displayMenu(theMenu,dish);
   
    console.log('prueba2');
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/function2.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZE1lbnUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhZ2Vwcm9qZWN0Ly4vc3JjL2Z1bmN0aW9uMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgXHJcblxyXG4gICAgY2xhc3MgRGlzaCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGlzaE5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSl7XHJcbiAgICAgICAgICB0aGlzLmRpc2hOYW1lPSBkaXNoTmFtZTtcclxuICAgICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcclxuICAgICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTsgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgXHJcbiAgICBjb25zdCBkaXNoID0gbmV3IERpc2godGhpcy5kaXNoTmFtZSwgdGhpcy5pbmdyZWRpZW50cywgdGhpcy5wcmljZSk7XHJcblxyXG4gICAgY29uc3QgZGlzaDEgPSBuZXcgRGlzaCgnZGFyayBmaXNoJywgJ2EgbG90IG9mIGZpc2gnLCAxMCk7XHJcbiAgICBjb25zdCBkaXNoMiA9IG5ldyBEaXNoKCdsaWdodCBwb3JrJywgJ2EgbG90IG9mIHBvcmsnLCAxMSk7XHJcbiAgICBjb25zdCBkaXNoMyA9IG5ldyBEaXNoKCdjbGVhciBjaGlja2VuJywgJ2EgbG90IG9mIGNoaWNrZW4nLDEzKTtcclxuICAgIGNvbnN0IGRpc2g0ID0gbmV3IERpc2goJ2hlYXZ5IHBhc3RhJywgJ2EgbG90IG9mIHBhc3RhJyw5KTtcclxuICAgIGNvbnN0IGRpc2g1ID0gbmV3IERpc2goJ3N3ZWV0IHZlZ2V0YWJsZXMnLCAnYSBsb3Qgb2YgdmVnZXRhYmxlcycsMTApO1xyXG5cclxuICAgIGxldCB0aGVNZW51ID0gWyAgZGlzaDEsICAgZGlzaDIgLCBkaXNoMywgZGlzaDQsIGRpc2g1IF07XHJcbiAgICBcclxuXHJcbiAgXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51KHRoZU1lbnUsIGRpc2gpIHtcclxuICBcclxuICBjb25zdCBsZW5ndGhNZW51ID0gdGhlTWVudS5sZW5ndGg7XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhNZW51OyBpKyspIHtcclxuICBcclxuICBcclxuICBjb25zdCBjdXJyZW50RGlzaCA9IHRoZU1lbnVbaV07XHJcbiAgY29uc29sZS5sb2cobGVuZ3RoTWVudSk7XHJcbiAgY29uc29sZS5sb2coZGlzaDEpO1xyXG4gIGNvbnNvbGUubG9nKHRoZU1lbnUpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnREaXNoKTtcclxuICBjb25zb2xlLmxvZyhpKTtcclxuXHJcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm8nKTtcclxuXHJcblxyXG4gIGNvbnN0IGNyZWF0ZURpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzaG93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBzaG93SW5ncmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHNob3dQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBcclxuICBcclxuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGVudCcpO1xyXG4gIGNyZWF0ZURpc2guY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNyZWF0ZURpc2guc2V0QXR0cmlidXRlKCdkYXRhJywgaSk7XHJcbiAgc2hvd05hbWUuY2xhc3NMaXN0LmFkZCgnc2hvd05hbWUnKTtcclxuICBzaG93SW5ncmVkLmNsYXNzTGlzdC5hZGQoJ3Nob3dJbmdyZWQnKTtcclxuICBzaG93UHJpY2UuY2xhc3NMaXN0LmFkZCgnc2hvd1ByaWNlJyk7XHJcblxyXG4gIHNob3dOYW1lLmlubmVyVGV4dCA9IFwiRGlzaDogXCIgKyBjdXJyZW50RGlzaC5kaXNoTmFtZTtcclxuICBzaG93SW5ncmVkLmlubmVyVGV4dCA9IFwiSW5ncmVkaWVudHM6ICBcIiArY3VycmVudERpc2guaW5ncmVkaWVudHM7XHJcbiAgc2hvd1ByaWNlLmlubmVyVGV4dCA9IFwiUHJpY2U6IFwiICsgY3VycmVudERpc2gucHJpY2UgKyBcIiB1c2RcIjtcclxuXHJcbiAgXHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzaCk7XHJcbiAgY3JlYXRlRGlzaC5hcHBlbmRDaGlsZChzaG93TmFtZSk7XHJcbiAgY3JlYXRlRGlzaC5hcHBlbmRDaGlsZChzaG93SW5ncmVkKTtcclxuICBjcmVhdGVEaXNoLmFwcGVuZENoaWxkKHNob3dQcmljZSk7XHJcbiAgXHJcblxyXG4gIH1cclxufVxyXG5kaXNwbGF5TWVudSh0aGVNZW51LGRpc2gpO1xyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKCdwcnVlYmEyJyk7XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==