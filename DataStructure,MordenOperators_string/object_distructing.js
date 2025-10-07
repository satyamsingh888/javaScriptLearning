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
  orderDeliver: function({starterIndex,mainIndex,time,address}){
    console.log(`order recived ${this.starterMenu[starterIndex]},and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`);
  }
};
restaurant.orderDeliver({
  time:'22:30',
  address:'Via del Sole,21',
  mainIndex:2,
  starterIndex:2,
})
                   
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories:tags,
} = restaurant;
console.log(restaurantName,hours,tags);

const{menu = [], starterMenu: starter = []} = restaurant;
console.log(menu,starter);

//Mutatating variables
let a = 34;
let b = 56;
const obj = {a:23, b:7, c:6};
({a,b} = obj);
console.log(a,b);

//Nested object                                                           
const{
  fri: {open:o, close:c},

} = openingHours
console.log(o,c);