/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isAnagram = function (s, t) {
    let map1 = new Map()
    let map2 = new Map()

    if (s.length != t.length) return false

    for (let char of s) {
        if (map1.has(char)) {
            map1.set(char, map1.get(char) + 1)
        }
        else {
            map1.set(char, 1)
        }
    }

    for (let char of t) {
        if (map2.has(char)) {
            map2.set(char, map2.get(char) + 1)
        }
        else {
            map2.set(char, 1)
        }
    }



    for (let [key, values] of  map1) {
        if (!map2.has(key)) return false

        if (map2.has(key)) {
            if (map2.get(key) != values) return false
        }
    }
    return true
};