'use strict';
const calAge = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
};
calAge(2001);


const calAgeArrow =birthYear =>{
    console.log(2037-birthYear);
    console.log(this);
};
calAgeArrow(2004);


const jonas = {
    year: 1991,
    calAge: function(){
        // console.log(this);
        console.log(2037-this.year);
    }

};
jonas.calAge();
const matilda ={
    year:2017,

};
 matilda.calAge = jonas.calAge
 matilda.calAge();

