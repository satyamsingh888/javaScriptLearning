const cutFruitPices= function(fruit){
    return fruit *6;
}

function fruitprocessor(apple, banana){
    const applePices = cutFruitPices(apple);
    const bananaPices = cutFruitPices(banana);
    
const juice = `juice with ${applePices} applepices and ${bananaPices} bananaPices`
return juice;
} console.log(fruitprocessor(2,3));