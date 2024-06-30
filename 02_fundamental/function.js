function singh(){
    console.log('My name is jonas');
}

// calling / running / invoking function
// singh();
// singh();
// singh();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice= `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// const appleJuice =fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0)); // you can also write the code like these 

// const appleOrangeJuice = fruitProcessor(2,5);
// console.log(appleOrangeJuice);


const num= Number('23');




//some more example

// function addTwoNumbers(number1,number2){
// console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
// let result = number1 + number2
// return result

return  number1 + number2

}
const result = addTwoNumbers(2,3);
// console.log( "result : ", result);




function loginUserMessage(username){
    if(username===undefined){
        console.log("please entered a username");
        return;
    }
   return ` ${username} just logged in `
 }

// console.log(loginUserMessage("satyam"));
 console.log(loginUserMessage());






