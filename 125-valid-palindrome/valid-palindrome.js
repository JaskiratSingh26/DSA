/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = ''

    if (s.length == 0) return true

    for (let char of s) {

        if (char == ' ' || char == ':' || char == ',') continue
        let word = char.toLowerCase()
        if ((word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) || (word.charCodeAt(0) >= 48 && word.charCodeAt(0) <= 57)) 
        { left += word }
    }

    let i = 0
    let j = left.length - 1

    while (i <= j) {
        if (left[i] != left[j]) return false
        i++
        j--
    }
    return true
};