/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {

    if (nums.length == 1) return true

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] % 2 == 0) {
            if (nums[i + 1] % 2 == 0) return false
        }
        else {
            if (nums[i + 1] % 2 != 0) return false
        }

    }

    return true

};