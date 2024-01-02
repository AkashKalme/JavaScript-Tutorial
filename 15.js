// JS Chapter 4 - Practice set on Strings

// 1. What will following print in JS?
// console.log("har\"".length);
console.log("har\"".length);

// 2. Explore the includes, startswith and endswith functions in JS.
const sentence = "A quick brown fox jumped over the lazy dog."
const word = "fox"
console.log(sentence.includes(word));
console.log(sentence.includes("fox2"));

console.log(sentence.startsWith("The"));
console.log(sentence.startsWith("A "));

console.log(sentence.endsWith("dog"));
console.log(sentence.endsWith("dog."));

// 3. Write a program to convert a given string to lowercase.
let nam = "Akash"
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());

// 4. Extract the amount in the string.
let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice(15))
console.log(amount);

// 5. Try to change the 4th character of a given string.
let friend = "Deepika"
friend[4] = 'R'
console.log(friend);