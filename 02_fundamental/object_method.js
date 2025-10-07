const singh = {
  "name": "Satyam",
  "lastName": "Singh",
  "birthYear": 2001,
  "job": "developer",
  "friends": ["Michael", "Aniket", "Sanit"],
  "location": "india",
  "twitter": "@satyam",
  hasDriversLicence: true,

  
  
  // calAge: function(birthYear){
    //   return 2024-birthYear;
    // }
    calAge: function(){
      this.age = 2024 - this.birthYear;
      return this.age;
    },
    challanges: function (){
      return `${singh.name} ${singh.lastName} is a ${singh.calAge()} years old, and he has ${singh.hasDriversLicence ? 'a' : 'no'} drivers licence`
    }
  };
console.log(singh.calAge(2001));
// console.log(singh["calAge"](2001));

console.log(singh.age);
console.log(singh.calAge());
console.log(singh.calAge());


console.log(singh.challanges());




