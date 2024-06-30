
const calAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirment = (birthYear , firstName) =>{
    const age = calAge(birthYear);
    const retirment = 65 - age;
if(retirment > 0){
    console.log(`${firstName} retire in ${retirment} years`);
    return retirment;

}else{
    console.log(`${firstName}has already retired`);
    return -1;
}
}

console.log(yearsUntilRetirment(2001, 'satyam'));
console.log(yearsUntilRetirment(1950, 'Thanos'));