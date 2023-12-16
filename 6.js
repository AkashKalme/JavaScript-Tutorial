// JavaScript Operators and Expressions

// Operators: Symbol that performs operations
// Expressions: Fragment of code that produces a output.

console.log("Operators in JS");
a = 45
b = 4

console.log();
console.log("Arithmetic Operators");
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("a++ = ", --a);
console.log("a = ", a);

console.log();
console.log("Assignment Operators");
a = a + 5
console.log("a = ", a);
a += 5
console.log("a = ", a);
a -= 5
console.log("a = ", a);


console.log();
console.log("Comparison Opeartors");
// == (Equal to)
// != (Not Equal to)
// === (Equal to Value and Type)
// !== (Not Equal to Value and Type)
// > < >= <=
// ?: (Ternary Operator)

let c1 = 6
let c2 = 7
let c3 = '6'

console.log(c1==c2);
console.log(c1!=c2);
console.log(c1==c3);
console.log(c1!=c3);

console.log(c1===c2);
console.log(c1!==c2);
console.log(c1===c3);
console.log(c1!==c3);

console.log(c1<=c2);
console.log(c1>c2);
console.log(c1<=c3);
console.log(c1>c3);

console.log();
let l1 = 5
let l2 = 7
console.log("Logical Operators");
console.log(l1<=5 && l2<=16);
console.log(l1<5 && l2<10);
console.log(l1<5 || l2<10);
console.log(!true);

console.log();
console.log("Comments");
console.log("Single Line Comment: // Comment");
console.log("Multi Line Comment: /* Comment */");