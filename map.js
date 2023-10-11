/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).

 * Please solve it without the built-in Array.map method.
 */


// To solve this problem, we need to loop through each element in the arr and apply the mapping function fn to each element along with its index. 
// Then, store the result in a new array. Here's how you can do that:

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // Create an empty array to store the results
    let result = [];

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the function and push the result to the new array
        result.push(fn(arr[i], i));
    }

    // Return the new array
    return result;
};

// Test cases 
const arr1 = [1,2,3];
const plusone = function(n) { return n + 1; };
console.log(map(arr1, plusone));  // [2,3,4]

const arr2 = [1,2,3];
const plusI = function(n, i) { return n + i; };
console.log(map(arr2, plusI));  // [1,3,5]

const arr3 = [10,20,30];
const constant = function() { return 42; };
console.log(map(arr3, constant));  // [42,42,42]