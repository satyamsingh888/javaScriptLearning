//Arrow Function

const age = birthYear => 2024 - birthYear;
// console.log(age(2001));
const age1 = age(2001);
// console.log(age1);


const yearsuntilRetirement = (birthYear, firstname )=> {
const age=  2024 - birthYear;
console.log(`${firstname} is ${age} years old`);
const retirment = 50 - age;
return `${firstname} will retire in ${retirment} years`;
};
console.log(yearsuntilRetirement(2001, "satyam"));
console.log(yearsuntilRetirement(2000, "Aniket"));





