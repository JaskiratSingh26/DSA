/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let word = ''
    let i = 0
    let j = 0


    while (i < s.length) {



        if (j < spaces.length && i === spaces[j]) {
            word += ' ';
            j++;
        }
        else {
            word += s[i]
            i++
        }

    }

    return word

};