/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

 * The fn function takes one or two arguments:

    * arr[i] - number from the arr
    * i - index of arr[i]
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

 * Please solve it without the built-in Array.filter method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // Create an empty array to store the filtered elements
    let result = [];

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the function returns a truthy value
        if (fn(arr[i], i)) {
            // Push the element to the result array
            result.push(arr[i]);
        }
    }

    // Return the result array
    return result;
};

const arr1 = [0,10,20,30];
const greaterThan10 = function(n) { return n > 10; };
console.log(filter(arr1, greaterThan10));  // [20,30]

const arr2 = [1,2,3];
const firstIndex = function(n, i) { return i === 0; };
console.log(filter(arr2, firstIndex));  // [1]

const arr3 = [-2,-1,0,1,2];
const plusOne = function(n) { return n + 1 };
console.log(filter(arr3, plusOne));  // [-2,0,1,2]