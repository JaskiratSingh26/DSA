/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let string = new String(x)
    let end = []

    for (let i = 0; i < string.length; i++) {
        end.unshift(string[i])
    }



    for (let i = 0; i < string.length; i++) {
        if (string[i] != end [i]) return false
    }
    return true
};