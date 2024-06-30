const friend1 = 'Michael';
const friend2 = 'Aman';
const friend3 = 'Sanit';

const friends= ['Michael','Aman','Sanit'];
console.log(friends);

const years = new Array(1991,2003,3444,3443);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[0] = 'Nigam';
console.log(friends);

const firstName = 'satyam';
const satyam = [firstName, 'singh', 2024-2001, 'student', friends];
console.log(satyam);
console.log(satyam.length);

//Exercise
const calAge = function(birthYear){
    return 2037 - birthYear;
}

const years1 = [1990,1967,2002,2010,2018];

const age1 = calAge(years1[0]);
const age2 = calAge(years1[1]);
const age3 = calAge(years1[years.length-1]);
console.log(age1,age2,age3);


const ages = [calAge (years1[0]) , calAge (years1[1]), calAge(years1[years1.length-1])];
console.log(ages);



