"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: ["Italian", "Pizzeria", "Vegitarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Capress Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,

      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (
    mainIngredients1,
    mainIngredients2,
    ...otherIngredients
  ) {
    console.log(mainIngredients1);
    console.log(mainIngredients2);
    console.log(otherIngredients);
  },
};
//use any data types , return any data types, short-circuting
console.log('----OR----');
restaurant.numguest = 23;
const guest1  =  restaurant.numguest?restaurant.numguest:10;
console.log(guest1);

const guest2 = restaurant.numguest || 10;
console.log(guest2);

console.log('----AND----');
console.log(0&&'jonas');
console.log(4&&'jonas');
console.log('jello'&&45&&null&&'jonas');

//Practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');