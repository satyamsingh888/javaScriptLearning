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
};
                   
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours,categories);

const {name: restaurantName, openingHours: hours, categories: tags}  = restaurant;










