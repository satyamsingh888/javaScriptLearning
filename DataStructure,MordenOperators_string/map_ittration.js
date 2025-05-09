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

const questions = new Map([['questions','What is the best Programming language in the  world?'],
[1,'C'],
[2,'Java'],
[3,'JavaScript'],
['correct',3],
[true,'Correct'],
[false,'Try again']
]);
console.log(questions);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(questions.get('questions'));
for(const [key,value]  of questions){
  if(typeof key=== 'number') console.log(`Answer  ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(questions.get(questions.get('correct')===answer));


//Convert map to array
console.log(...questions);
// console.log(questions.entries());
console.log(...questions.keys());
console.log(...questions.values());
 