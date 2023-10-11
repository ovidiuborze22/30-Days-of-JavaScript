/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

 * The function composition of an empty list of functions is the identity function f(x) = x.

 * You may assume each function in the array accepts one integer as input and returns one integer as output.

 
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Start with the input value
        let result = x;

        // Apply each function in reverse order
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        // Return the final result
        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn1(4));  // 65

const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1));  // 1000

const fn3 = compose([]);
console.log(fn3(42));  // 42