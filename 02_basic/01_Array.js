//Array
const myArr = [0,3,5,6,34]

const myHeros = ["ironman"," Hulk"]

const myArray2= new Array(1,2,3,4,)
// console.log(myArr[1]);

//Array Method

// myArr.push(6)         // add 6 in exixting array 
// myArr.push(78)          // push is use ading element in exixting array
// myArr.pop()      // pop use for delete last element in array 

// myArr.unshift(9)   // unshigt use for add element in starting in array
// myArr.shift()     // shift is use for deleting first element

// console.log(myArr.includes(34));    // it is use for to find number which is exit or not in array
// console.log(myArr.indexOf(7));    // it is used generally element position which is exist in array or it will show -1


// const newArr = myArr.join()   // it is convert array to string

// console.log(myArr);
// console.log( typeof newArr);


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);