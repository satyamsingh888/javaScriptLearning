//Maths Operators

const now = 2037;
const ageSatyam= now-1991;
const ageSara = now-2018;
console.log(ageSatyam, ageSara);

console.log(ageSatyam * 2, ageSatyam/10,2**3)
// 2**3 Means to the power of three = 2 *2*2

const firstname = 'jonsa';
const lastname ='singh';
console.log(firstname+ ' '+lastname);

//Assignment operator
let x = 10+5;
x+=5; // x=x+5 = 20
x*=4; // x =x*4 = 100
// x++;
// x--;
// x--;
console.log(x);


// comparision Operator
console.log(ageSatyam>ageSara); // >,< , >=,<=
console.log(ageSara <=18);

const isFullAge = ageSara>=18;

console.log(now-1991 > now-2018)



// operator Presedence-----

let l,m;
l = m=25-10-5;
console.log(l,m);

const averageAge = (ageSatyam + ageSara) /2
console.log(ageSatyam, ageSara , averageAge);




