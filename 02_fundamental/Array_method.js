const friends = ['Aman', 'Sanit', 'Aniket'];
console.log(friends);
// Add Element
const newLength = friends.push('satyam');
console.log(friends);
console.log(newLength);
console.log(friends.length);

friends.unshift('king');
console.log(friends);

//Remove element
const popped = friends.pop();     // Last 
// const popped = friends.pop()
console.log(popped);

// const shifted = friends.shift();
// friends.shift();
// console.log(shifted);

console.log(friends.indexOf('Sanit'));

friends.push(23);
console.log(friends.includes('sanit'));
console.log(friends.includes('Sanit'));
console.log(friends.includes(23));

if (friends.includes('Sanit')){
    console.log('you have a friend called Sanit');
}
