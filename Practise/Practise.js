// function wishing(name) {
//   wish = `Goodmorning ${name}`;
//   return wish;
// }
// // console.log(wishing("satyam"));

// //Ading two numbers
// function addTwoNumbers(a, b) {
//   return a + b;
// }
// // console.log(addTwoNumbers(2, 3));

// // square of numbers
// function squarofNumbet(square) {
//   return (squarofNumbet = square * square);
// }
// // console.log(squarofNumbet(5));

// function square(number) {
//   return number * number;
// }
// // console.log(square(4));

// //find positive and negetive number
// function isPositive(number) {
//   return number > 0;
// }
// // console.log(isPositive(-7));

// //Area of rectangle

// function calculateArea(length, wedith) {
//   area = length * wedith;
//   return area;
// }
// // console.log(calculateArea(6, 4));

// //minutes into second

// function convert(numbers) {
//   minutes = numbers * 60 + "minutes";
//   seconds = numbers * 60 + " seconds";
//   return minutes, seconds;
// }
// // console.log(convert(3));
// // console.log(convert(2));

// //minimum of Two Numbers
// function findMin(a, b) {
//   return a > b ? b : a;
// }
// // console.log(findMin(8,4));

// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumArray([2, 3, 4, 10, 6]));

// // Array
// // let fruits =['apple','Banana','mango'];
// // console.log(fruits);

// // Array Constructor
// let numbers = new Array(1, 2, 3, 4, 5);
// let emptyArray = new Array(10);
// console.log(numbers);

// //Accessing Array

// // let fruits = ['Banana','kivi','Graps'];
// let fruits = new Array("Bananna", "Kivi", "Graps");
// console.log(fruits[0]);
// console.log(fruits[2]);

// //Modifying Element

// let Vehicle = ["car", "bus", "bike"];
// console.log(Vehicle);
// Vehicle[2] = "train";

// //Length property

// let name = ["Ramesh", "Suresh", "Ram"];
// console.log(name.length);

// //Push Method --> add more element to the end of the array

// let fruits1 = new Array("Bananna", "Kivi", "Graps");
// fruits1.push("Date");
// console.log(fruits1);

// //pop Method --> Remove the last element from array

// let electItem = ["fan", "LCd", "bulb", "shocket"];

// console.log(electItem.pop());
// console.log(electItem);

// //shift method --> remove the first element from the array

// let electItem1 = ["fan", "LCd", "bulb", "shocket"];
// shifted = electItem1.shift();
// console.log(shifted);
// console.log(electItem1);

// //unshift method --> add more element bigning of the array

// let electItem2 = ["fan", "LCd", "bulb", "shocket"];
// unshifted = electItem2.unshift("Iron", "clock");

// console.log(unshifted);
// console.log(electItem2);

// //indexof --> return the index of the first occurrence of specified value

// let electItem3 = ["fan", "LCd", "bulb", "shocket"];

// console.log(electItem3.indexOf("bulb"));

// //slice --> Return a new array containing a portion of the original array

// let electItem4 = ["fan", "LCd", "bulb", "shocket"];
// electItem4.slice(1, 3);
// console.log(electItem4);

// for (let i = 0; i < electItem4.length; i++) {
//   console.log(electItem4[i]);
// }

// let num = [1, 2, 3, 4,5];
// function summation(a, b) {
//   return a + b;
// }
// let sum = num.reduce(summation, 0);
// console.log(sum);

// let num1 = [1, 2, 3, 4];
// let sum1 = 0;
// for (let i = 0; i < num1.length; i++) {
//   sum1 += num1[i];
// }
// console.log(sum1);

// let numb=[2,3,4,5,9];
// let min = Math.min(...numb);
// console.log(min);

// let num =[34,34,5,6,66];
// function sum(a,b){
// return a+b;
// }
//  console.log (num.reduce(sum));

// let num =[34,34,5,6,66];
// let sum = 0;
// for(let i = 0; i<num.length; i++){
//   sum += num[i];
// }
// console.log(sum);

// let num = [2,3,4,5,6];

// let sum = num.reduce(function(a,b){
//   return a+b;

// })

// let average = sum / num.length;
// console.log(average);

// let number = [2, 3, 4, 5, 6];
// let sum = number.reduce((a, b) => a + b);
// let average = sum / number.length;
// console.log(average);


// let num = [2,3,4,5,6];
// let sum = 0;
// for(let i = 0; i<num.length; i++){
//   sum +=num[i]
// }let average = sum /num.length;
// console.log(average);


// let num = [3,4,5,5,6];
// let mul = num.reduce((a,b) => a*b,);
// console.log(mul);

// let num = [3,4,5,5,6];
// let mul = 1;
// for(let i =0; i<num.length; i++){
//   // mul *=num[i];
//   mul = mul*num[i];
// }console.log(mul);

let num = [2,3,4,5,1,0];
// number.sort((a,b) => a-b);
// let sort= num.sort(function(a,b){
//   return a-b; 
// })
// console.log(sort);

num.sort((a,b) => b-a);

console.log(num);









