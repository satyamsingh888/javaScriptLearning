const age ="18";
if(age==='18')console.log(`you just became an adult :D (strict)`);

if (age == 18) console.log(`you just became an adult :D (loose)`)


const favourite = Number(prompt("what is your fevourite number?"));
console.log(favourite);
console.log(typeof favourite);


if(favourite ===23){
    console.log(`cool! 23 is an amazing number!`);
}else if(favourite===7){
    console.log("cool! 7 is also a cool number!");
}else if(favourite===9){
    console.log(`9 is also a cool number!`)
}
else{
    console.log(`number is not 23 or 7!`);
}

if(favourite !==23){
    console.log(`why not 23?`);
}


