// console.log("ligting weight repetition 1 ");
// console.log("ligting weight repetition 2 ");
// console.log("ligting weight repetition 3 ");
// console.log("ligting weight repetition 4 ");
// console.log("ligting weight repetition 5 ");
// console.log("ligting weight repetition 6 ");
// console.log("ligting weight repetition 7 ");
// console.log("ligting weight repetition 8 ");
// console.log("ligting weight repetition 9 ");
// console.log("ligting weight repetition 10");

// for(let rep = 1; rep <=10; rep++){
//     console.log('Lifting weight repetition ' +rep );
// }

const jonasArray = [
  "Jonas",
  "Schemedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  //Reading from jonas Array
  console.log(jonasArray[i], typeof jonasArray[i]);
  // filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [2001, 2002, 2003, 2004, 2005];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
  // ages[i]= 2024- years[i]
}
console.log(ages);


// continue and break
console.log('---ONLY STRINGS---');
for(let i =0; i< jonasArray.length; i++){
  if(typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i] , typeof jonasArray[i]);
}
for(let i =0; i< jonasArray.length; i++){
  if(typeof jonasArray[i] !== 'string') break;
  console.log(jonasArray[i] , typeof jonasArray[i]);
};


for(let i = jonasArray.length -1; i>=0; i--){
  console.log(i,jonasArray[i]);
}


for(let exercise  =1; exercise<4; exercise++){
console.log(`-----Starting exercise ${exercise}`);


for(let rep = 1; rep<6; rep++){
  console.log(`Exercise Lifting weight repetition ${rep}`);
}
};