//Function declaration

function calAge1(birthYear){
    const age = 2037-birthYear;
    return age;
}
const age1=calAge1(1991);

console.log(age1);


//Function expression

const calAge2 = function(birthyear){
    return 2037- birthyear
}
const age2 = calAge2(1991);
console.log(age1,age2);