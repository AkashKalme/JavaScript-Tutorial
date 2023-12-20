// Functions in JS

function hello()
{
    console.log("Hello");
}

function onePlusAvg(x, y)
{
    return 1 + (x+y)/2;
}

// Arrow Functions
const sum = (p, q) => {
    return p+q;
}

const hi = () => {
    console.log("Hi");
    return "Akash";
}

console.log(onePlusAvg(2,3));
hello()
console.log(sum(10, 20));
let a = hi()
console.log(a);