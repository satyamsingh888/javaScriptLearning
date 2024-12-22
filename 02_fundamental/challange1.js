const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKolas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKolas);

const checkWinner = function (avgDolphins, avgKolas) {
  if (avgDolphins >= 2 * avgKolas) {
    console.log(`Dolphine wins ${avgDolphins} vs ${avgKolas}`);
  } else if (avgKolas >= 2 * avgDolphins) {
    console.log(`kolas wins ${avgDolphins} vs ${avgKolas}`);
  } else {
    console.log("no teams wins....");
  }
};
checkWinner(scoreDolphins, scoreKolas);
checkWinner(400,100)

// Test 2
 scoreDolphins = calcAverage(44, 23, 71);
 scoreKolas = calcAverage(65, 54, 49);
 console.log(scoreDolphins,scoreKolas);
 checkWinner(scoreDolphins, scoreKolas);

