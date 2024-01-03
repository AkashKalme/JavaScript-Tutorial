// Introduction to Arrays

let marks = [26, 34, 49, 50, 91, null, "Absent"]
console.log(typeof(marks));
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);

console.log("The length of array 'marks' is " + marks.length);

marks[7] = 89
marks[0] = 66

console.log(marks);
console.log("The length of array 'marks' is " + marks.length);