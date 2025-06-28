/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let paired = [...nums].map((num, i) => [num, i])

    let sorted = paired.sort((a, b) => b[0] - a[0])

    let topK = sorted.slice(0, k)

    let sortedTopK = topK.sort((a, b) => a[1] - b[1])


    return sortedTopK.map((item) => item[0])


};