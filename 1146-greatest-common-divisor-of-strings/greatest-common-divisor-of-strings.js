/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 == str2 + str1) {

        return str2.substring(0, gcd(str1.length, str2.length))
    }
    else {
        return ''
    }

};

let gcd = function (a, b) {
    while (b % a != 0) {

    let rem=b%a
    b=a
    a=rem
    }
    return a
}