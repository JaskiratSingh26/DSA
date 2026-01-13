/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    let maxlen = 0
    let l = 0
    let r = 0
    let maxfreq = 0
    let map = new Map()

    while (r < s.length) {

        map.set(s[r], (map.get(s[r]) || 0) + 1);

        maxfreq = Math.max(maxfreq, map.get(s[r]))

        while (((r - l) + 1)-maxfreq > k) {
            map.set(s[l], map.get(s[l]) - 1)
            l++
        }

        maxlen = Math.max(maxlen, (r - l) + 1)
        r++


    }
    return maxlen
};