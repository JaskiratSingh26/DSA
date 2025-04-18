/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0
    let l = 0
    let r = nums.length - 1
     

 nums.sort((a, b) => a - b);

    while (l < r) {

        if (nums[l] + nums[r] < k) {
            l++
        }
        else if (nums[l] + nums[r] > k) {
            r--
        }
        else{
            l++
            r--
            count++
        }

    }

    return count
};