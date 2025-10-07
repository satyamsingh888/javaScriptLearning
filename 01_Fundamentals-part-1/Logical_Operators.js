const hasDriversLinces = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLinces && hasGoodVision);
console.log(hasDriversLinces || hasGoodVision);
console.log(!hasGoodVision);

// const shouldDrive = hasDriversLinces && hasGoodVision 

// if(shouldDrive)
// {
//     console.log("sara is able to drive");

// }else{
//     console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriversLinces && hasGoodVision || isTired);


const shouldDrive = hasDriversLinces && hasGoodVision && isTired
if(shouldDrive)
{
    console.log("sara is able to drive");

}else{
    console.log("Someone else should drive");
}

