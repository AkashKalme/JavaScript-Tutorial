// Conditonal Expressions in JS

const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Whats your age?");
a = Number.parseInt(a)

if(a > 0)
{
    console.log("This is a valid age.");
}
else
{
    console.log("You can drive.");
}

if(a<9)
{
    console.log("You are a kid and cannot drive.");
}
else if(a>=9 && a<18)
{
    console.log("Wait until you turn 18 to drive.");
}
else if(a>=18 && a<=70)
{
    console.log("You can drive!");
}
else
{
    console.log("You are advised not to drive.");
}
console.log("Done");

console.log("You can ", a<18 ? "not drive." : "drive.");