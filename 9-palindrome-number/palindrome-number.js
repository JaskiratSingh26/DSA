/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let rev = []

    let s = x.toString()
    s = s.split('')

    for (let i = 0; i < s.length; i++) {

         rev.unshift(s[i])
        

    }

    rev=rev.join('')
    return rev==x


};