// var, let and const
// var: Global Scope, can be redeclared
// let: Block Scope, no redeclaration
// const: Cannot be redeclared as well as changed

var a = 'Akash'
{
    var a = 'Kalme'
    console.log(a);
}
console.log(a);

let b = 'Akash'
{
    let b = 'Kalme'
    console.log(b);
}
console.log(b);

let c = 'Akash'
console.log(c);
// let c = 'Kalme'              // Error
c = 'Kalme'
console.log(c);

const pi = 3.14
console.log(pi);
// pi = 7                   // Error