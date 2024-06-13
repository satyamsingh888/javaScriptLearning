function logger() {
    console.log("My name is Satyam");
}
//calling / runnig / invoking function
logger();
logger();
logger();
                                        
function fruitProcessor(apple, orange,){
    // console.log(apple,orange);                                     
    const juice = `juice with ${apple} apples and ${orange} oranges`;
    return juice;
}                                       
const appleJuice=fruitProcessor(5,3);  
console.log(appleJuice); 

console.log(fruitProcessor(5,3));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');