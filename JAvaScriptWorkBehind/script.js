const person = {
  name: 'Akanksha',
  age: 21,
  greet:function(){
    // console.log(`hey ${this.name}`);
    const  innerArrow = () => {
      console.log('Hello, ' + this.name);
    };
    
    innerArrow();
  },
 
    
};

// person.greet(); // Output: Hello, Akanksha
person.greet();


