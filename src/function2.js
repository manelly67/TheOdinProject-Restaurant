export default function loadMenu() {
   

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