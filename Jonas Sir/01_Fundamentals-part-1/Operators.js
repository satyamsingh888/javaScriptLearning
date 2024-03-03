//Maths Operators

const now = 2045;
const ageSatyam= now-2001;
const ageSara = now-2024;
// console.log(ageSara , ageSatyam);

// console.log(ageSatyam *2,ageSatyam/2 , 2**3);
// 2**3 means 2 to the power of 3 = 2*2*2
const firstName= "satyam";
const LastName = "singh";
// console.log(firstName + ' ' +LastName);
// console.log(`${firstName}  ${LastName}`);

//Assignment Operators

let x = 10+5; // 15
x+=10 // x= x+10=25
x*=4; // x =x*4=100
x++; //x=x+1
x--; //x =x-1

// console.log(x);

//Comparison Operators

// console.log(ageSatyam>ageSara);// >,<,>=,<=
// console.log(ageSara>=18);

const isFullAge =ageSara>=18;
// console.log(now-2001>now-2024);


// Operator Precedence

const now1 =2037;
const ageJonas = now -1990;
const ageSimu = now -2020;

// console.log(now-1990>now-2020);
// console.log(25-3-4);

let x1,y;
x1=y=25-3-4; //x1=y=18
// console.log(x1,y);

const averageAge=(ageJonas+ageSimu) /2;
console.log(ageJonas,ageSimu,averageAge);

