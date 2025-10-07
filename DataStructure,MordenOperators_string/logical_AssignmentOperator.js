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


const rest1 ={
name: 'Capri',
numguests:0
};

const rest2 = {
    name:'La Piazza',
    owner:'Giovanni Rossi'
};
//OR assignment operator---------------
// rest1.numguests = rest1.numguests||10;
// rest2.numguests = rest2.numguests||10;

// rest1.numguests ||= 10;
// rest2.numguests ||= 10;

//Nulish assignment operator
rest1.numguests ??= 10;
rest2.numguests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMUS';
// rest2.owner = rest2.owner && '<ANONYMUS';
rest1.owner &&= "<ANONYMUS";
rest2.owner &&= "<ANONYMUS";
console.log(rest1);
console.log(rest2);
