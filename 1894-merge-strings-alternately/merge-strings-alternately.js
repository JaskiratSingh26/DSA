/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let ans = ''
    if (word1.length > word2.length) {

        for (let i = 0; i < word1.length; i++) {
            ans += word1[i]
            if (word2[i]) {
                ans += word2[i]

            }
        }

    }
    else {
        for (let i = 0; i < word2.length; i++) {
            if (word1[i]) {

                ans += word1[i]
            }

            ans += word2[i]


        }


    }

    return ans 
};