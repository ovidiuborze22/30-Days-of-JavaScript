/**
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).  
 * */ 

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10);
console.log(counter()); // This will print 10 to the console
console.log(counter()); // This will print 11 to the console
console.log(counter()); // This will print 12 to the console