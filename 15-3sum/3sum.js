/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1
        let right = nums.length - 1
        let subarr = []
        if (i > 0 && nums[i] == nums[i - 1]) continue

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (sum < 0) left++
            if (sum > 0) right--

            if (sum == 0) {
                subarr = [nums[i], nums[left], nums[right]]
                ans.push(subarr)
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }



        }
     
    }

    return ans
};