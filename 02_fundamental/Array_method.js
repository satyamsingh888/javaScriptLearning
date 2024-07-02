const friends = ['satyam', 'Aman', 'Aniket']
const newLength = friends.push('Jay');
//Add Elements
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
// friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// const popped1 = friends.pop();
// console.log(popped1);

// friends.shift();
// console.log(friends);

const shifted = friends.shift();
console.log(shifted)

console.log(friends.indexOf('satyam'));
console.log(friends)

friends.push(23);
console.log(friends.includes('satyam'))
console.log(friends.includes('Jay'))
console.log(friends.includes(23));



if(friends.includes('Shyam')){
    console.log('you have  nice friend ');
} else {
    console.log('you donnt have friend');
}