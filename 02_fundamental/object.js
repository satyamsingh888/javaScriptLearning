const jonasArray = [
    'satyam',
    'singh',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'steven']
];    

const jonas = {
    FirstName : 'satyam',
    LastName : 'singh',
    age: 2037 - 2001 ,
    job: 'student',
    friends:  ['Michael', 'Peter', 'steven']
};
console.log(jonas);

console.log(jonas.LastName);
console.log(jonas['LastName']);

const nameKey = 'Name';
console.log(jonas['First' + nameKey]);
console.log(jonas['Last' + nameKey]);

// const intrestedIn = prompt('what is intresting about jonas? choose between FirstName, LastName, age, job, friends');

// if(jonas[intrestedIn]){
//     console.log(jonas[intrestedIn]);
    
// }else{
//     console.log("Wrong request! choose between FirstName, LastName, age, job, friends');");
// }


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemedtman';
console.log(jonas);

console.log(`${jonas.FirstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);




