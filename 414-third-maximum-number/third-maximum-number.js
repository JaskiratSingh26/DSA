/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let set = new Set(nums)


    nums = Array.from(set).sort((a, b) => a-b );


    if (nums.length >= 3) return nums[nums.length - 3]

    if (nums.length == 1) return nums[0]

    else {
        return nums[nums.length - 1]
    }


};