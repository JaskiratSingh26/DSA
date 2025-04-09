/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    let hashmap = new Map()

    for (let i = 0; i < nums.length; i++) {


        if (hashmap.has(nums[i])) {
            let distance =i - hashmap.get(nums[i]) 
            if (distance <= k) { return true }
            else {
               hashmap.set(nums[i],i)
            }
        }
        else {
            hashmap.set(nums[i], i)
        }


    }

    return false
};