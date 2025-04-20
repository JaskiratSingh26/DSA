/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = -Infinity
    let current = 0

    for (let i = 0; i < gain.length; i++) {
        current += gain[i]
        max = Math.max(current, max)
    }

    if(max<0)return 0
    return max


};