// JavaScript Chapter 1
// 1. Create a variable of type string and try to add a number to it.

let a = "Akash"
let b = 5
console.log(a+b);
console.log(b+a);

// 2. Use typeof operator to find the datatype of string in last question.
console.log(typeof(a+b));
console.log(typeof(b+a));

// 3. Create a const object in JavaScript. Can you change it to hold a number later?
const c = {
    name: "Akash", 
    age: 23
}

console.log(c);

// c = 5            // Not Allowed

// 4. Try to add a new key to the const object in 3. Were you able to do it?
c["college"] = "PICT" 
console.log(c);

c['age'] = 22
console.log(c);

// 5. Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
    cromulent: "acceptable, satisfactory",
    ngl: "not gonna lie; not going to lie",
    generativeAI: "artificial intelligence that is capable of generating new content (such as images or text) in response to a submitted prompt (such as a query) by learning from a large reference database of examples",
    rewild: "to return to a more natural or wild state",
    finsta: "a secret or incognito account on the Instagram photo-sharing service"
}

console.log(dict.finsta);
console.log(dict["generativeAI"]);