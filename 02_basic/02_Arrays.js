const marval_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros  = ["Superman", "Flash", "Batman"]
marval_heros.push(dc_heros)
console.log(marval_heros);
console.log(marval_heros[3][2]);

// const allHeros =marval_heros.concat(dc_heros)
// console.log(allHeros)
const all_new_Heros = [...marval_heros,...dc_heros]
// console.log(all_new_Heros);


const another_array=[1,2,3,4,[5,6,7],8,9,[10,11,[12,13]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("singh"))
console.log(Array.from("singh"))
console.log(Array.from({name: "singh"})) //intresting



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


