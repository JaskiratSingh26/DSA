/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let low = 1
    let high = (nums.length) - 2

    if (nums.length == 1) {
        return 0;

    }

    if(nums[0]>nums[1]){
        return 0
    }

    if(nums[(nums.length)-1]>nums[(nums.length)-2]){
        return (nums.length)-1
    }
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]){
            return mid
        }

        else if(nums[mid]<nums[mid+1]&& nums[mid]> nums[mid-1]){
            low=mid+1
        }

        else
        {
            high=mid-1
        }
    }

};