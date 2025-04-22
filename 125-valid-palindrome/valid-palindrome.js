/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let string = ''

    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0);
        if ((charCode >= 65 && charCode <= 90) || // Uppercase letters
            (charCode >= 97 && charCode <= 122) || // Lowercase letters
            (charCode >= 48 && charCode <= 57)) {
            string += s[i].toLowerCase()
        }

    }


    let tempOppositeString = []

    for (let i = 0; i < string.length; i++) {
        tempOppositeString.unshift(string[i])
    }

    let OppositeString = tempOppositeString.join('')
    let i = 0
    let j = string.length - 1

    while (i < string.length) {

        if (string[i] != OppositeString[i]) return false

        i++
    }

    return true
};