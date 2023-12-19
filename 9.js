// For Loops in JS

const prompt = require("prompt-sync")({sigint:true}); 
// For Loop
for(let i=0; i<5; i++)
{
    console.log(i);
}

let sum = 0;
let n = prompt("Enter the Value of n: ")
for(let i=1; i<=n; i++)
{
    sum += i;
}
console.log(sum);

// For In
let marks = {
    "Akash": 95,
    "Manas": 45,
    "Aniket": 65,
    "Ram": 85
}

for(a in marks)
{
    console.log("Marks of ", a, " are ", marks[a]);
}

// For Of
for(let a of "Akash")
{
    console.log(a);
}