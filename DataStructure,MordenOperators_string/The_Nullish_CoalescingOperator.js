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

restaurant.numguests =0;
const guests = restaurant.numguests || 10;
console.log(guests);

//Nullish null and undifined (NOT 0,"")
const guestCorrect = restaurant.numguests ?? 10;
console.log(guestCorrect);
