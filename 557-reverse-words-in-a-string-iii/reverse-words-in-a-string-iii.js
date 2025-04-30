/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    let array = []
    let word = ''

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] == ' ') {
            array.unshift(word)
            word = ''
            array.unshift(' ')
        }
        else {
            word += s[i]
        }


    }
    array.unshift(word)
            word = ''

    return array.join('')
};