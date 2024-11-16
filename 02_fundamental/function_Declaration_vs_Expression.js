//Function declaration

function callAge1(birthYEar) {
  // const age = 2024 - birthYEar;
  // return age;
  return 2024 - birthYEar;
}
console.log(callAge1(2001));


//Function expression
const callAge2 = function (birthYEar) {
  return 2024 - birthYEar;
};
console.log(callAge2(2001));
