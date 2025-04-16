/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let first = Infinity
    let second = Infinity
    let third  = Infinity

    for(let i=0;i<nums.length;i++){

        if(nums[i]<=first){
            first=nums[i]
        }
        else if(nums[i]<=second){
            second=nums[i]
        }

        else{
            third=nums[i]
            return true
        }
    }
    
    return false 
};