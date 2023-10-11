/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Correct way to call the function
console.log(argumentsLength(5));  // 1
console.log(argumentsLength({}, null, "3"));  // 3
console.log(argumentsLength(1, 2, 3));  // 3