/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low=0
    let high=(nums.length)-1
    
  if(nums[high]<target){
    return nums.length
  }



  if(nums[0]>target){
    return 0
  }


    while(low<=high){
        let mid =Math.floor((low+high)/2)

        if(nums[mid]==target){
            return mid
        }

else if (nums[mid]<target && nums[mid+1]>target){
    return mid+1
}
        else if(nums[mid]<target){
            low=mid+1
        }
        else if(nums[mid]>target){
            high=mid-1
        }
    }

};