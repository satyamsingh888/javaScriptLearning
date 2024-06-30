const calcAverage = (a,b,c) => (a+b+c) /3 ;
console.log(calcAverage(2,3,4));
//Test 1
let scoreDolphine = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

console.log(scoreDolphine,scoreKoalas);

const checkWinner = function(avgDolphine, avgKolas){
    if(avgDolphine >= 2*avgKolas){
        console.log(`Dolphine win 🏆 (${avgDolphine} vs. ${avgKolas})`);
    }else if(avgKolas >= 2*avgDolphine){
        console.log(`kolas win 🏆 (${avgKolas} vs. ${avgDolphine})`);
    }else{
        console.log('no one wins...');
    }
}

checkWinner(scoreDolphine,scoreKoalas)

checkWinner(576,112);


//Test 2 

 scoreDolphine = calcAverage(85,54,41);
 scoreKoalas = calcAverage(23,34,27);
 console.log(scoreDolphine,scoreKoalas);
 checkWinner(scoreDolphine,scoreKoalas);