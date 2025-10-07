"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: ["Italian", "Pizzeria", "Vegitarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Capress Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours:{
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
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  }
};


const arr  = [3,4,5];
const badNewArr = [7,6,arr[0],arr[1],arr[2]];
console.log(badNewArr);
const newArr = [7,6,...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, string,maps , sets. NOT objects
const str = 'satyam';
const letter = [...str,'','s'];
console.log(letter);
console.log(...str);
    
//Real world Examples
const ingredients = [
  // prompt("Lets's make pasta! Ingredients 1?"),
  // prompt(" Ingredients 2?"),
  // prompt(" Ingredients 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant  = {foundingIn:1998,...restaurant, founder: "Singh"}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy);
console.log(restaurantCopy.name);
