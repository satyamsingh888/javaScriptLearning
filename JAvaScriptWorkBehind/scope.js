'use strict';

function calAge(birthYear){
    const age = 2025 - birthYear;
    // const firstName = 'satyam';
    function printAge(){
        let output = `${firstName},you are ${age}, born in ${birthYear}`
        console.log(output);
       
        if(birthYear>=1981 && birthYear <=1996){
            //creating scope's New variable with same anem as outer scope's variable
            const firstName = 'singh'
           //Reassigning outer scope's   variable
            output= 'new Output'
           
            var millenial = true;
            const str = `Oh, and you're a millenial,${firstName}`;
            console.log(str);
            
            function add(a,b){
                return a+b;
            }
            console.log(add(2,3));
        }
        console.log(millenial);
        console.log(output);
    }
 printAge();
    return age;
    
}
const firstName= 'jonas';
calAge(1995);






