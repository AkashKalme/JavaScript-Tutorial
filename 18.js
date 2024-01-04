// Some More JS Array Methods

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(nums);
console.log(nums.length);

delete nums[0]                          // Deletes the given element from array
console.log(nums);
console.log(nums.length);               // Array Length is NOT Changed

let nums1 = [1, 2, 3]
let nums2 = [4, 5]
let nums3 = [6, 7, 8]

let numsc = nums1.concat(nums2, nums3)
console.log(numsc);
console.log(nums1);                     // Does NOT Change Existing Array
console.log(nums2);
console.log(nums3);

let rnums = [4, 65, 12, 56, 16, 37, 89, 36, 24, 123, 456]
console.log(rnums);
rnums.sort()                            // Sorts Alphabetically
console.log(rnums);

let compare = (a, b) => {
    return a-b;
}
rnums.sort(compare)
console.log(rnums);

console.log(nums);
nums.splice(2, 3, 45, 65, 34)           // Returns Deleted Items and Modifies Source Array
// arr.splice(Position to Add, No. of Elements to Remove, Elements to Add[])
console.log(nums);
let delVals = nums.splice(0, 2, 11, 90, 69)
console.log(nums);
console.log(delVals);
console.log(typeof delVals);

let sl1 = nums.slice(2)                 // Slices the Array from Given Index and Returns a New Array
console.log(sl1);

let sl2 = nums.slice(2, 6)
console.log(sl2);

console.log(nums);
nums.reverse()
console.log(nums);