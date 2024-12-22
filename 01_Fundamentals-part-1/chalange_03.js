// let scoreDolphin = (96,108,89);
// let scoreKolas =(88,91,110);

// let averageDolphin = (96+108+89)/3;
// let averaScoreKolas=(88+178+110)/3;

// console.log(averaScoreKolas,averageDolphin);

// if(averageDolphin > averaScoreKolas){
//     console.log("Dolphine win the trophy");
// } 
//  else if(averaScoreKolas > averageDolphin)
// {
//     console.log("Kolas wins the trophy");
// }
// else if(averaScoreKolas === averageDolphin)
// {
//     console.log("They both wins");
// }

// Bonus 1

const averageDolphin = (97+112+80)/3;
const averaScoreKolas=(109+95+50)/3;
console.log(averaScoreKolas,averageDolphin);

if(averageDolphin > averaScoreKolas  && averageDolphin >=100){
    console.log("Dolphine win the trophy");
} 
 else if(averaScoreKolas > averageDolphin && averaScoreKolas >= 100)
{
    console.log("Kolas wins the trophy");
}
else if(averaScoreKolas === averageDolphin && averageDolphin >=100 && averaScoreKolas >=100)
{
    console.log("They both wins");
} else{
    console.log("No one wins the trophy");
}
