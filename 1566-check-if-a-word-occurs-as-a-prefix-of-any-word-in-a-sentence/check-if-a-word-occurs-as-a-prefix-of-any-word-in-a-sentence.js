/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {

    let word = ''
    let count = 1

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ' && word != ' ') {
            word = ''
            count++
        }


        if (sentence[i] != ' ') {

            word += sentence[i]
        }
        if (word == searchWord) {
            return count
        }
    }




    return -1

};