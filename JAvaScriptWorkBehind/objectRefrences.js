const jessica = {
    firstName: 'jssica',
    lastName: 'williams',
    age: 27,

};

function marryPersion(originalPerson, newLastName){
    originalPerson.lastName= newLastName;
    return originalPerson
};

const marriedJessica = marryPersion(jessica,'Davis');
console.log('Before',jessica);
console.log('After:',marriedJessica);

const jessica2 = {
  firstName: 'jssica',
  lastName: 'williams',
  age: 27,
  family: ['Alice','Bob'],
};

const jesscaCopy = {...jessica2};
jesscaCopy.lastName = 'Devis';
console.log(jessica2);
console.log(jesscaCopy);
jesscaCopy.family.push('Mary');
jesscaCopy.family.push('john');

