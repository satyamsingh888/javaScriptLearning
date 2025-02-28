
const jonas = {
    firstName: 'jonas',
    year: 1991,
    calAge: function(){
        // console.log(this);
        console.log(2037-this.year);

        //solution1---------
        // const self = this;            //self or that
//         const isMillenial = function(){
//             console.log(self);
//             console.log(self.year >=1981 && self.year <=1996);
//         };

        //solution2------------
 const isMillenial = () =>{
            console.log(this);
            console.log(this.year >=1981 && this.year <=1996);
        };

        
        isMillenial();
        
    },
  
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`)},
};
jonas.greet();
jonas.calAge();


