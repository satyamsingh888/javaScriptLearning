const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtamn',
    passport: 2236456546
}

const checkIN = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name;

    if(passenger.passport ===2236456546 ){
        // alert('Checked In')
    } else{
        // alert('Wrong passport');
    }
};

checkIN(flight,jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing ...
// const flightNum = flight;
// const passenger = jonas

const newPassport = function(person){
    person.passport =Math.trunc(Math.random()*100000000);
}

newPassport(jonas);
checkIN(flight,jonas)