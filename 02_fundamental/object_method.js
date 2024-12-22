const jonas = {
    firstName : 'satyam',
    lastName : 'singh',
    birthYear: 1991,
    job: 'student',
    friends:  ['Michael', 'Peter', 'steven'],
    hasDrivingLicence : true,

    // calAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    // calAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calAge: function(){
        this.age = 2037 - this.birthYear;
        return  this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calAge()} years old ${jonas.job}, and he has ${this.hasDrivingLicence  ? 'a' : 'no ' }drivers licence`
    }
    
};

console.log(jonas.calAge());

console.log(jonas.age);
console.log(jonas.age);

// Chalange
//'jonas is 46 years old teacher, and he has a driver licence"..
console.log(jonas.getSummary());







