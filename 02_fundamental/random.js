// console.log(name); // ❌ Output: undefined (not an error!)
// let name = "Akkanksha";
 // console.log(name); // ✅ Output: "Akkanksha"



 // let name = "Akkanksha";
//  if (true) {
//     let name = "Satyam";
//     console.log(name);
// }
// console.log(name); // 😵 Works! (But shouldn't)


let city = "Delhi";
let city1 = "Mumbai"; // 😵 Allowed! Overwrites the first value
console.log(city); // Output: "Mumbai"
console.log(city1); // Output: "Mumbai"


