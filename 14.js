// JS String Methods

let nam = "Akash"
console.log(nam);
console.log(nam.length);
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.slice(2, 5));
console.log(nam.slice(2));
console.log(nam.replace("A", "O"));

let nam2 = " Kalme"
console.log(nam.concat(nam2));
console.log(nam.concat("'s surname is", nam2));
console.log(nam2);
console.log(nam2.trim());

// Strings are Immutable
let god = "Shiv" + "Parvati"
console.log(god[0]);
console.log(god[1]);
console.log(god[2]);
console.log(god[3]);
console.log(god);
god[4] = 'p'
console.log(god);

for(i of god)
{
    console.log(i);
}