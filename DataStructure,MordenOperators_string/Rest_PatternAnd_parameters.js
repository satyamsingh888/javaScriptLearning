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
  orderPizza: function(mainIngredients1,mainIngredients2,...otherIngredients){
    console.log(mainIngredients1);
    console.log(mainIngredients2);
    console.log(otherIngredients);
  }
};
//1.Destructring 
//SPREAD , because on Right side of =
const arr = [1,2,...[3,4]];

//Rest, because of Left side of =
const [a,b,...others] = [1,2,3,4,5]
console.log(a,b,others);


const [pizza,,Risotto,...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,Risotto,otherFood);

//Object
const {sat,...weakdays}  = restaurant.openingHours;
console.log(weakdays);

//2.Function
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length;i++)
     sum+=numbers[i];
    console.log(sum);
}
add(2,3,4);
add(45,6,7);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushroom','onion','olives','spinach');

