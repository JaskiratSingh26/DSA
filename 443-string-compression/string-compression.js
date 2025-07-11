/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let ans = []
    let i = 0
    let j = 1
    let count = 1

    if (chars.length == 1) return chars.length


    while (j < chars.length) {

        if (chars[j] == chars[i]) {
            count++
        }

        if (chars[j] != chars[i]) {

            ans.push(chars[i]);
            if (count > 1) {
                for (let ch of count.toString()) {
                    ans.push(ch);
                }
            }
            count = 1;
            i = j;


        }
        j++
    }

    ans.push(chars[i]);
    if (count > 1) {
        for (let ch of count.toString()) {
            ans.push(ch);
        }
    }


    for (let k = 0; k < ans.length; k++) {
        chars[k] = ans[k];
    }

    return ans.length;


};