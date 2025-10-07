"use strict";
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
  const openingHours ={
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,

      close: 23,
    },
    [`day-${2+4}`]: {
      open: 0,
      close: 24,
    },
  };
const restaurant = {
  name: "Classico Italiano",
  location: ["Italian", "Pizzeria", "Vegitarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Capress Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //Es6 enhanced object literals
openingHours,

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(
    mainIngredients1,
    mainIngredients2,
    ...otherIngredients
  ) {
    console.log(mainIngredients1);
    console.log(mainIngredients2);
    console.log(otherIngredients);
  },
};
