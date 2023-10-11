/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

 * A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

 * If the length of the array is 0, it should return init.

 * Please solve it without using the built-in Array.reduce method.
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Start with the initial value
    let result = init;

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function and update the result
        result = fn(result, nums[i]);
    }

    // Return the final result
    return result;
};

const nums1 = [1,2,3,4];
const sum = function(accum, curr) { return accum + curr; };
console.log(reduce(nums1, sum, 0));  // 10

const nums2 = [1,2,3,4];
const sumSquares = function(accum, curr) { return accum + curr * curr; };
console.log(reduce(nums2, sumSquares, 100));  // 130

const nums3 = [];
const sumZero = function(accum, curr) { return 0; };
console.log(reduce(nums3, sumZero, 25));  // 25