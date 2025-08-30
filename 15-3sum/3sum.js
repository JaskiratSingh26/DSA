/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) j++
            else if (sum > 0) k--
            else {
                // ehere sum==0
                let subarr = [nums[i], nums[j], nums[k]]
                ans.push(subarr)
                j++
                k--

                while (j < k && nums[j] == nums[j - 1]) j++
            }
        }
    }
    return ans
};