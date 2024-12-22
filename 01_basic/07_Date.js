// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23 ,5 ,6)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now
// console.log(mytimeStamp());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getDay());

newDate.toLocalString('default',{
    weekday:"long",
    
    
})

