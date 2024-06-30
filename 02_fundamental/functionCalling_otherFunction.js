function cutFruitPieces(fruit){
    return fruit * 3; 
}

function fruitProcessor(apple, orange){
const applePieces = cutFruitPieces(apple);
const orangePieces = cutFruitPieces(orange);

    const juice = ` Juice with ${applePieces}pieces of  apples and ${orangePieces}pieces of oranges `;
    return juice;
}

console.log(fruitProcessor(2,3));


