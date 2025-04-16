/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    let hashmap = new Map()

    for (let v in arr) {

        if (hashmap.has(arr[v])) {

            hashmap.set(arr[v], hashmap.get(arr[v]) + 1)

        }
        else {
            hashmap.set(arr[v], 1)
        }

    }
    let ans = []
    for (let [key, value] of hashmap) {
     
        if (ans.includes(value)) {
            return false
        }
        else {
            ans.push(value)
        }
    }

    return true
};