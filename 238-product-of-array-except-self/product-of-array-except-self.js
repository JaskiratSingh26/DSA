/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let left = [nums[0]]
    let right = [nums[nums.length - 1]]
    let ans = []

    for (let i = 1; i < nums.length; i++) {
        left.push(nums[i] * left[left.length - 1])
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right.unshift(nums[i] * right[0])
    }

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) ans.push(right[1])
        else if( i==nums.length-1) ans.push(left[i-1])
         else ans.push(left[i-1]*right[i+1])

    }
    return ans 

};