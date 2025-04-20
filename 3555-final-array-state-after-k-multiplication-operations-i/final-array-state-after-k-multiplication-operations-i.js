/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {

    while (k != 0) {

        let min = Infinity
        let index = 0

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] < min) {
                min = nums[i]
                index = i
            }
        }
        let data = min * multiplier
        nums[index] = data
        k--
    }

    return nums
};