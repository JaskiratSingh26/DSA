/**
 * @param {number} n
 * @return {boolean}
 */


var isPowerOfFour = function (n) {

    if (n === 1) return true;         // Base case: 3^0 = 1
    if (n < 1 || n % 4 !== 0) return false; // If not divisible by 3, not a power

    return isPowerOfFour(n / 4)
};