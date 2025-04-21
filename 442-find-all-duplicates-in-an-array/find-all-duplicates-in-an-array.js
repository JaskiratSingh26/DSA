/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {


    let ans = []

    let hashmap = new Map()


    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
        ans.push(nums[i])
        }

        else {
            hashmap.set(nums[i], 1)
        }
    }

   
    return ans

};