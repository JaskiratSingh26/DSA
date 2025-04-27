/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    

    if(nums.length<=1) return 
    let i=0
    let j=2
    let count=0
    while(j<nums.length){

        if(nums[j]+nums[i]==nums[j-1]/2){
            count++
        }

        j++
        i++
    }

    return count 
};