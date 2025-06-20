/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let a = 0
    let b = 1
    if (n == 0) return 0
    else if (n == 1) return 1

    else {
        for (let i = 1; i < n; i++) {
            let c = a + b
            a = b
            b = c
        }

    }
    return b
};