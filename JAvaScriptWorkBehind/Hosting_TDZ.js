//Variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'satyam';
let job = 'teacher';
const year = 1991;

//Function
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));


function addDecl(a,b){
    return a+b;
}

const addExpr = function(a,b){
    return a+b;
}

const addArrow = (a,b)=> a+b;

//Example

console.log(undefined);
if(!numProducts) deleteShopingCard();

var numProducts = 10;
function deleteShopingCard(){
    console.log('All product deleted');
}


