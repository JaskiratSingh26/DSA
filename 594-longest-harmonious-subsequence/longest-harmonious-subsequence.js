/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let hashmap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1)
        }
        else {
            hashmap.set(nums[i], 1)
        }
    }


    let maxlen = 0

    for (let i = 0; i < nums.length; i++) {

        let min = nums[i]
        let max = min + 1

        if (hashmap.has(max)) {

            maxlen = Math.max(maxlen, hashmap.get(max) + hashmap.get(min))
        }

    }

    return maxlen
};