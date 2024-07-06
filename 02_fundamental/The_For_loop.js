
/* console.log('Lifting weight repetition 1');
console.log('Lifting weight repetition 2');
console.log('Lifting weight repetition 3');
console.log('Lifting weight repetition 4');
console.log('Lifting weight repetition 5');
console.log('Lifting weight repetition 6');
console.log('Lifting weight repetition 7');
console.log('Lifting weight repetition 8');
console.log('Lifting weight repetition 9');
console.log('Lifting weight repetition 10'); */

//for loop keeps running while condition is True
// for(let rep =1; rep<=10; rep++){
//     // console.log(`Lifting weight repetition ${rep}`);
// }

// console.log('hell');

// Looping Arrays, Breaking and Continuing---------------------->


const Jonas = [
    'jonas',
'singh',
2037 - 1991,
'teacher',
['Michael', 'Peter', 'Steven'],
true,
'naruto',
];

const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// console.log(jonas[5]); // does not exixt

for(let i =0;i< Jonas.length ;i++){
    //Reading from jonas array
    // console.log(Jonas[i], typeof Jonas[i]);

    //Filling types array
    // types[i] = typeof Jonas[i]
    types.push(typeof Jonas[i])
}
// console.log(types);


const years = [1991, 2007, 1969,2020];

const ages = [];
for(i=0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
// console.log(ages);


//Continue and BreakSteatment...........

for(let i = 0; i< Jonas.length; i++){
    if(typeof Jonas[i] !== 'string') continue;
    // console.log(Jonas[i], typeof Jonas[i]);
}

//Break.....
for(let i = 0; i< Jonas.length; i++){
    if(typeof Jonas[i] !== 'string') break;
    // console.log(Jonas[i], typeof Jonas[i]);
}





// Looping Backword and Loops in Loops ------------------>>>>


const Satyam = [
    'satyam',
'singh',
2037 - 1991,
'teacher',
['Michael', 'Peter', 'Steven'],
true,
'naruto',
];

//0 , 1, 2, ,3...4
// 4,3,2.....1,0

for(let i =Satyam.length-1; i>=0; i--){
console.log(Satyam[i]);
}


// Loops insinde Loops

for(exercise =1; exercise<4; exercise++){
    console.log(`-----exercise ${exercise}`);

    for(rep = 1; rep <=5; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}





