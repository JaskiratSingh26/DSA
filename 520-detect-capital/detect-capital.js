/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    let n = word.length
    let count = 0
    for (let i = 0; i < n; i++) {

        if (word[i] == word[i].toUpperCase()) {
            count++
        }



    }

    if (count == n) return true
    else if (count == 0) return true
    else if (count == 1 && word[0] == word[0].toUpperCase()) return true
    else return false


};