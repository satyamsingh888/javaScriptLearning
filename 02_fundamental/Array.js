// const friend1 = 'satyam';
// const friend2 = 'Aman';
// const friend3 = 'Sanit';

const friends = ['satyam' , 'Aman', 'Sanit'];
console.log(friends);

const years = new Array(2001, 2002, 2003);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] ='Aniket';
console.log(friends);

const firstName= 'satyam';
const lastName= 'singh';
const age = 2024-2001;
const satyam = [firstName,lastName,`${age} years old`, ];
console.log(satyam);
console.log(satyam.length);

//Exercise

const calAge = function(birthYear){
    return 2024 - birthYear;
}
const years1  = [1990,1967,2001,2003];

const age1 = calAge(years1[0]);
const age2 = calAge(years1[1]);
const age3 = calAge(years1[years.length -1]);
console.log(age1,age2,age3);

const ages = [calAge(years1[0]),calAge(years1[1]) ,calAge(years1[years.length -1])];
console.log(ages);
