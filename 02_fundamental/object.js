// const singhArray = [
//   "satyam",
//   "singh",
//   2024 - 2001,
//   "developer",
//   ["Nigam", "Aniket", "Sanit"],
// ];

const singh = {
  firstName: "Satyam",
  lastName: "Singh",
  age: 2024 - 2001,
  job: "developer",
  friends: ["Michael", "Aniket", "Sanit"],
};
console.log(singh);
console.log(singh.lastName);
console.log(singh["lastName"]);

const nameKey = "Name";
console.log(singh["first" + nameKey]);
console.log(singh["last" + nameKey]);

// const interstedIn = prompt(`What do you want to know about Satyam? Choose between firstName, lastName, age, job, and friends`);
// console.log(singh[interstedIn]);

// if(singh[interstedIn]){
//   console.log(singh[interstedIn]);
// }else{
//   console.log("Wrong request! choose between firstName, lastName, age, job, and friends");
// }

singh.location = "india";
singh["twitter"] = "@satyam";
console.log(singh);

const challanges = `${singh.firstName} ${singh.lastName} have ${singh.friends.length} friends, and his name is ${singh.friends}, and his best friends is ${singh.friends[0]}`;
console.log(challanges);


