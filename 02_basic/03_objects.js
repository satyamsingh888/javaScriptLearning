1 // singleton 
// Object.create

// object literal
const mySym = Symbol("Key1")

const jsUser = {
name: "singh",
"full name": "singh IS king",
[mySym]: "myKey1",
age : 18,
location: "Goa",
email: "singh@google.com",
isLoggedIn: false,
lastLoginDays:["monday","satyurday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(  jsUser[mySym]);

jsUser.email = "singh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "singh@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
