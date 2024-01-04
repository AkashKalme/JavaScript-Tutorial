// JS Array Methods

let nums = [1, 2, 3, 45, 6]

let b = nums.toString()
console.log(b);
console.log(typeof b);

let c = nums.join("_")
console.log(c);
console.log(typeof c);

let r = nums.pop()              // Returns Popped Element
console.log(r);
console.log(nums);

r = nums.push(67)               // Adds Element at the End and Returns Length of the Array
console.log(r);
console.log(nums);

r = nums.shift()                // Removes First Element from Array
console.log(r);
console.log(nums);

r = nums.unshift(10)            // Adds Element at First Position and Returns the Length of Array
console.log(r);
console.log(nums);