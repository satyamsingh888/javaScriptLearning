let scoreDolphin = (96,108,89);
let scoreKolas =(88,91,110);

let averageDolphin = (96+108+89)/3;
let averaScoreKolas=(88+178+110)/3;

console.log(averaScoreKolas,averageDolphin);

if(averageDolphin > averaScoreKolas){
    console.log("Dolphine win the trophy");
} 
 else if(averaScoreKolas > averageDolphin)
{
    console.log("Kolas wins the trophy");
}
else if(averaScoreKolas === averageDolphin)
{
    console.log("They both wins");
}
