"use strict";
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,

    close: 23,
  },
  [weekDays[5]]: {
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngredients1, mainIngredients2, ...otherIngredients) {
    console.log(mainIngredients1);
    console.log(mainIngredients2);
    console.log(otherIngredients);
  },
};



if(restaurant.openingHours.mon && restaurant.openingHours){
  // console.log(restaurant.openingHours.mon.open);
}

//with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Examples
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for(const day of days){

  const open = restaurant.openingHours[day]?.open??'Open another days' ;
  // console.log(`on ${day}, we open at ${open}`);
}


//Methods
// console.log(restaurant.order?.(0,1) ??'MEthod does not exist');

//Array
const user = [{
  name: 'jonas',
  email: 'xyz@.com'
}];
// console.log(user[0]?.name ?? 'user array epmpty');
// if(user.length>0)console.log(user[0].name);
// else console.log('user array empty');


   

//Loping object -------------

    //Property name 
    const properties = Object.keys(openingHours);
    console.log(properties);
  let openStr = `we are open on ${properties.length} days:`;


    for(const day of properties){
      openStr  +=  `${day},`;
    }
console.log(openStr);
 
//Property Values --------------
const values =  Object.values(openingHours);
// console.clear(values);

//Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

//[key , values]---------
for(const [key, {open , close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

