/**
 * Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
 * toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
 * notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val !== expectedVal) throw new Error("Not Equal");
            return true;
        },
        notToBe: function(expectedVal) {
            if (val === expectedVal) throw new Error("Equal");
            return true;
        }
};
};

// Testing the expect function
console.log(expect(5).toBe(5)); // true

try {
    expect(5).notToBe(5); 
} catch (e) {
    console.log(e.message); // logs "Equal"
}
