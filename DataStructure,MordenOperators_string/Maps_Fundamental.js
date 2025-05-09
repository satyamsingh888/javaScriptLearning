const rest = new Map();
rest.set("name", "classico Italiano");
rest.set(1, "Firenze,Italy");
console.log(rest.set(2, "Lisbon,Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegitarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
.set(true,'We are open :D')
.set(false,'We are closed :(')

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get('categories'));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegitarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
.set(true,'We are open :D')
.set(false,'We are closed :(')

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get('categories'));

const time = 21;
const check = rest.get(time> rest.get('open') && time<rest.get('close'));
console.log(check);

//Methods
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1,2]
rest.set(arr, 'Test');
console.log(rest);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.size);

console.log( rest.get(arr));







