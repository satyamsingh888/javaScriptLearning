const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
const [first, ...other] = str.split('');
return[first.toUpperCase(), ...other].join(' ');
};

//Higher-order function
const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);
console.log(`Transformed by: ${fn.name}`);
}

transformer('javaScript is the best!', upperFirstWord);

const high5 = function(){
    console.log('✋');
};
document.body.addEventListener('click', high5);