// Introduction to Strings

let nam = "Akash";

console.log(nam)
console.log(nam.length);
console.log();
console.log(nam[0]);
console.log(nam[1]);
console.log(nam[2]);
console.log(nam[3]);
console.log(nam[4]);
console.log(nam[5]);

console.log();
let friend = 'Harry'
console.log(friend);
console.log(friend.length);

console.log();
// Template Literals
let boy1 = "Ram"
let boy2 = 'Shyam'

let sentence = `boy1 is a friend of boy2`
console.log(sentence);

let sentence2 = `${boy1} is a "friend" of ${boy2}`          // String Interpolation
console.log(sentence2);

console.log();
// Escape Sequence Characters
// \'
let fruit = 'Bana\'na'
console.log(fruit);
console.log(fruit.length);

// \n
let fruit2 = 'Bana\nna'
console.log(fruit2);
console.log(fruit2.length);

// \t
let fruit3 = 'Bana\tna'
console.log(fruit3);
console.log(fruit3.length);

// \r
let fruit4 = 'Bana\rna'
console.log(fruit4);
console.log(fruit4.length);