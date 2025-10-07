const airline =  'Tap Air Portugal';
// const plane = 'A320)';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737');

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));
// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
//B and E are Middle Seat
const s = seat.slice(-1);
if(s==='B' || s=== 'E'){
// console.log('You got The Middle Seat ');
}
else {
    // console.log('You got lucky');
}
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


// console.log(new String('Jonas'));
// console.log(typeof new String('Jonas'));
// console.log(typeof new String('Jonas').slice(1));



// Working WIth Strings----------------------

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
// const passenger = 'joNaS';   //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();   //for cover faltu space
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#','$').replace(',','.');
console.log(priceUS);


const anouncement = 'All Passengers come to boarding door 23, Boarding door 23!'

console.log(anouncement.replace('door','gate'));  
// console.log(anouncement.replaceAll('door','gate'));  

console.log(anouncement.replace(/door/g, "gate"));  


//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Booing'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the New Airbus Family');
}


//Parctise Exercise
const checkBaggage = function(item){
const baggage = item.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed on Board');
}
else{
    console.log('welcome on aboard!');
}
}
checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Shocks and Camera');
checkBaggage('Got some snakes and a gun for protection');



//Split and JOin
console.log('kya + hall + hai'.split('+'));
console.log('satyam singh'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function(name){
const names = name.split(' ');
const namesUpper = [];

for(const n of names){
//   namesUpper.push(n[0].toUpperCase() + n.slice(1));
namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
}
console.log(namesUpper.join(' '));
}
  capitalizeName('jessica and smith davis')
  capitalizeName('satyam singh')

//Padding
const message = 'Go to gate 23!'
console.log(message.padEnd(25,'+'));
console.log(message.padStart(25,'+').padEnd(30,'+'));


const maskCreditCard = function(number){
    const str = number + '';
const last = str.slice(-4);
return last.padStart(str.length,'*');

}

console.log( maskCreditCard(43235534545324));
console.log( maskCreditCard('3274832748234789'));


//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);


//String Pactice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();
  
console.log(flights.split('+'))
for(const flight of flights.split('+')){
   const [type, from, to , time] =  flight.split(';');
   const output = `${type.startsWith('_Delayed') ? '🔴':''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} ${time.replace(':','h')}`.padStart(36);
   console.log(output);
}