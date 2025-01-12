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

for(let i =0; i< jonasArray.length; i++){
    console.log(jonasArray[i], ); 
    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(types);