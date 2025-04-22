/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let zeros = []
    let number = []

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
             nums[i]=nums[i]*2
             nums[i+1]=0
        }
    }


    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            zeros.push(0)
        }
        else{
            number.push(nums[i])
        }
    }


    nums=[...number,...zeros]

    return nums
};