/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
    let min = -(2 ** 31)
    let max = 2 ** 31 - 1
    let result = 0;
    let sign = 1;

    s = s.trim();

    let i = 0;
   if (s[0] === '-') {
        sign = -1;
        i = 1;
    } else if (s[0] === '+') {
        i = 1;
    }


    for (; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            break;
        } else {
            result = result * 10 + (s[i] - '0');

            if (sign * result <= min) return min
            if (sign * result >= max) return max
        }
    }

    return sign === -1 ? -result : result;
};