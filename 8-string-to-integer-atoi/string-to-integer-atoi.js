/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;
    let result = 0;
    let sign = 1;

    s = s.trim();
    let i = 0;

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    for (; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') break;

        result = result * 10 + (s[i] - '0');

        if (sign * result <= min) return min;
        if (sign * result >= max) return max;
    }

    return sign * result;
};