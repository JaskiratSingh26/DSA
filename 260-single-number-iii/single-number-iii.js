/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {

    let hashmap = new Map()

    let ans = []

    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1)
        }
        else { hashmap.set(nums[i], 1) }
    }

    for (let [values, index] of hashmap) {
        if (index == 1) ans.push(values)
    }

    return ans

};