

// for(let rep =1; rep<=10; rep++){
//     console.log(`Lifting weight repetition ${rep}`);
// }


let rep =1;
while(rep<=10){
    // console.log(`Lifting weight repetiotion ${rep}`);
    rep++;
}

let dice =Math.trunc( Math.random() * 6) +1;

while(dice !==6){
    console.log(`You  called a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;
    if(dice === 6) console.log('Loop is about to end...')
}