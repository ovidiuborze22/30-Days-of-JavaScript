/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    * The first time the returned function is called, it should return the same result as fn.
    * Every subsequent time it is called, it should return undefined.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    let result;
    
	return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        }
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Test the function:
let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined

fn = (a, b, c) => (a * b * c);
onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined
console.log(onceFn(4, 6, 8)); // undefined