/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  
  for(let i=0;i<nums.length;i++){

   if(target==nums[i]){
    return i
   }

   else if(target<nums[0]){
    return 0
   }

   else if(nums[i]<target && nums[i+1]>target){
    return i+1
   }


  }
let ans =(nums.length)
return ans
};