const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirment = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  // return `${firstName} is ${age} years old`     function have multiple return statment but only one can be excute,  based oyn the condition 
  console.log(`${firstName} is ${age} years old`);
  const retirment = 65 - age;
  if(retirment > 0){

      return `${firstName} will retire in ${retirment} years;`;
  } else{
     return `${firstName} has been allready retired`;
  }
};

console.log(yearsUntilRetirment(1945, "satyam"));
console.log(yearsUntilRetirment(2000, "Aryansh"));
