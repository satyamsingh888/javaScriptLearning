// # Primitive 

//7 types : string, Number , Boolean , null , undefined, 
    // symbol, BigInt

const score = 100
const scoreValue = 100.45

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 234232534534453n


// Reference (Non primitive)    

// Array, Objects , Functions


const heros = ["Hulk" , "Ironman", "Thor"]
{
    name: "satyam"
    age : 34

}

const myfunction= function(){
console.log("hello World");
}

console.log(typeof scoreValue);



/*        Typeof


string  typeof   string
Boolean  typeof   boolean
Number   typeof   number
Undefined  typeof   undefined
Symbol     typeof   symbol
function   typeof    object
Null       typeof     object
float      typeof      Number

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename ="SinghDotCom"

let anothername = myYoutubename
anothername = "SinghISking"

console.log(anothername);
console.log(myYoutubename);


let userOne ={
    emain: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)





