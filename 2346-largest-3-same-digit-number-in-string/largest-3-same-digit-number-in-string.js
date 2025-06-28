/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let max = -1
    let ans = ''
    for (let i = 2; i < num.length; i++) {
        if (num[i] == num[i - 1] && num[i] == num[i - 2]) {
            let temp = num[i] + num[i] + num[i];
            if (parseInt(temp) > max) {
                max = parseInt(temp);
                ans = temp;
            }
        }
    }

    return max == -1 ? '' : ans
};