//Arrow Function

const calcAge1 = birthYear => 2037 - birthYear;
const age3 = calcAge1(1991);
console.log(age3);


const yearsUntilRetirment = (birthyear , firstName) => {
    const age = 2037 - birthyear;
    const retirment = 65- age;
    // return retirment;
    return `${firstName} retirs in ${retirment} years`
}

console.log(yearsUntilRetirment(1991, 'satyam'));
console.log(yearsUntilRetirment(1980, 'jonas'));
