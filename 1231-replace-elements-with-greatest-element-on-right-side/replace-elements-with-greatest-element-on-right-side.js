/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    if (arr.length == 1) return [-1]
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        let max = 0

        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, arr[j])
        }
        ans.push(max)

    }

    ans[ans.length - 1] = -1
    return ans




};