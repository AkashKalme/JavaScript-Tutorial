// JavaScript Chapter 2

const prompt = require("prompt-sync")({sigint:true}); 
// 1. Use logical operators to find whether the age of a person lies between 10 and 20.

let age = prompt("Enter Your Age: ")
if(age>10 && age<20)
{
    console.log("Age lies between 10 and 20.");
}
else
{
    console.log("Age does not lie between 10 and 20.");
}

console.log();
// Demonstrate the use of switvh statements in JS.
let a = prompt("Enter a Number: ")
switch (a) {
    case '45':
        console.log("Number is 45.");
        break;
    
    case '60':
        console.log("Number is 60.");
        break;

    case '69':
        console.log("Number is 69.");
        break;

    default:
        console.log("Number is not special.");
        break;
}

console.log();
// 3. Write a JS program to check whether a number is divisible by 2 and 3.
let num = prompt("Enter a Number: ")
num = Number.parseInt(num)
if(num%2==0 && num%3==0)
{
    console.log("Number is divisible by 2 and 3.");
}
else
{
    console.log("Number is not divisible by 2 and 3.");
}

console.log();
// 4. Write a JS program to check whether a number is divisible by either 2 or 3.
let num2 = prompt("Enter a Number: ")
num = Number.parseInt(num)
if(num2%2==0 || num2%3==0)
{
    console.log("Number is divisible by either 2 or 3.");
}
else
{
    console.log("Number is not divisible by either 2 or 3.");
}

console.log();
// 5. Print "You can Drive." or "You can not Drive." using ternary operator.
let age2 = prompt("Enter Your Current Age: ")
let s = age2>18 ? "You can Drive" : "You can not Drive."
console.log(s);