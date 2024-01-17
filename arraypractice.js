// array practice

let superHero = ['ironman','spiderman','thor'];
let filmHero = ['salman','shahrukh','akshay'];

// superHero.push(filmHero);
// console.log(superHero);

let allmix = superHero.concat(filmHero);
console.log(allmix);

// superHero.push(...filmHero);
// console.log(superHero);

let mixspreadop = [...superHero,...filmHero]
// console.log(mixspreadop);

let another_array = [1,2,3,4,[3,4,5],4,5,[7,8,9,[5,7,8]]];
// let real_array = another_array.flat(Infinity)
// let real_array = another_array.flat(2);
// console.log(real_array);

// converting value in array
console.log(Array.isArray('Surya'));
console.log(Array.from('Surya'));
console.log(Array.from({name : "surya"}));

// convert in array we can use of and from

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
