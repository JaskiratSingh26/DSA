/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let data = num.split('')
    let ans = 0
    let array = []

    for (let i = (data.length) - 1; i >= 0; i--) {

        if (data[i] % 2 == 1) {
            ans = i
            array = data.slice(0, ans + 1)
            return array.join('')
        }


    }



    return ""







    
};