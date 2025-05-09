const orderSet = new Set([
    'Pasta',
    'Pasta',
    'Risotto',
    'Risotto',
    'Risotto',
    'Pizza',
    'Pizza',
])
// console.log(orderSet);
// console.log(new Set('singh'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has("Bread"));

orderSet.add('Garlic Bread')
orderSet.delete('Risotto')
// orderSet.clear();
// console.log(orderSet);

// for(const order of orderSet) console.log(order);

//Example 
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

// console.log(new Set ('kingissingh').size);



//New Operation to make sets useful ----------------------

const italianFoods = new Set([
'Pasta',
'Gnocchi',
'Tomatos',
'olive oil',
'garlic',
'basil',
]);
const mexicanFoods = new Set ([
    'tortillas',
    'beans',
    'rice',
    'Tomatos',
    'avocado',
    'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
console.log(new Set([...italianFoods,...mexicanFoods]));

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueItalianFoods);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));