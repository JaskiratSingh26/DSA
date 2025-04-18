/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

 let vlaues = []
    let zeros = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !=0) {
            vlaues.push(nums[i])
        }
        else {
            zeros.push(nums[i])
        }
    }

    let ans =[...vlaues,...zeros]
for(let i=0;i<ans.length;i++){
    nums[i]=ans[i]
}

return nums 
    
};