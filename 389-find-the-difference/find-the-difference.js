/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {


    let hashmap = new Map()


    for (let i = 0; i < t.length; i++) {

        if (!s.includes(t[i])) return t[i]



        if (hashmap.has(t[i])) {
            hashmap.set(t[i], hashmap.get(t[i])+1)
        }

        else {
            hashmap.set(t[i], 1)
        }
    }

    let hashmap2 = new Map()

    for (let i = 0; i < s.length; i++) {
        if (hashmap2.has(s[i])) {
            hashmap2.set(s[i], hashmap2.get(s[i])+1)
        }

        else {
            hashmap2.set(s[i], 1)
        }
    }



    for (let [values, index] of hashmap) {
        if (!hashmap2.has(values) || hashmap2.get(values) !== index) {
            return values;
        }
    }

};