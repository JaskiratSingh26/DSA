/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let hasmap=new Map()

   for(let i=0;i<nums.length;i++){
    if(hasmap.has(nums[i])) return true

    else{
        hasmap.set(nums[i],0)
    }
   }

   return false 
    
};