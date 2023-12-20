// JavaScript Chapter 3

const prompt = require('prompt-sync')({sigint:true});

// 1. Write a program to print marks of students in an object using for loop.
// marks = {"Akash": 95, "Ram": 85, "Sahil": 60}
let marks = {"Akash": 95, "Ram": 98, "Sahil": 60}

for(let i=0; i<Object.keys(marks).length; i++)
{
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

console.log();
// 2. Write a program for 1. using 'for in' loop
for(let key in marks)
{
    console.log("Marks of " + key + " are " + marks[key]);
}

console.log();
// 3. Write a program to print 'Try Again' until user enters a correct value.
let cn = 5
let i
while (i!=cn) {
    console.log("Try Again.");
    i = prompt("Enter a Number: ");
}
console.log("Correct number is entered.");

console.log();
// 4. Write a function to find mean of 5 numbers.
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e)/5;
}

console.log("Mean: " + mean(1,2,3,4,5));