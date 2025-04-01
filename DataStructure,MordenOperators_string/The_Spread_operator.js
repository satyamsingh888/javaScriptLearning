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


const arr = [7,8,9]
const badNew = [1,2,arr[0],3,4,arr[1],5,arr[2]];
console.log(badNew);

const newArr = [1,2, ...arr];
console.log(newArr);

 console.log(...newArr);
 
 const newMenu = [...restaurant.mainMenu,'Gnocci'];
 console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array
const menu =[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

//Itrables: arrays,string,maps, sets, NOt object
const str = 'satyam';
// console.log(`${...str} Schmedtman`);
const letters = [...str,'','s.'];
console.log(letters);
console.log(...str);


// const ingredients = [prompt("let's make pasta! ingredients 1?"),prompt('ingredient 2?'),prompt('ingredient 3')];
// console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);


// object

