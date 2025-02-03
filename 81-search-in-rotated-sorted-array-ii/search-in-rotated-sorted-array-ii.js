/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {


    let ans =false

    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            ans=true 
            return ans 
        }
    }
    return ans 
    
};