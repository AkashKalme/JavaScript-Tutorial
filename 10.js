// While Loops in JS
// while(condition) {
//     // Code to be executed
// }

const prompt = require("prompt-sync")({sigint:true});

let n = prompt("Enter a Number: ")
let i = 0
while(i<n)
{
    console.log(i);
    i++;
}

i = 0;
do
{
    console.log(i);
    i++;
}while(i<n)