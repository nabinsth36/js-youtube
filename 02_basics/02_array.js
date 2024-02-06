const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes)
const allHeroes = marvel_heroes.concat(dc_heroes);

// spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes);

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.from("Hitesh"));

console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 200;
let score2 = 400;
let score3 = 600;

console.log(Array.of(score1, score2, score3));
