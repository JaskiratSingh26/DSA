/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
     let prefix = []
    let sufix = []
    let calpr = 1
    let calsr = 1
    let ans=[]
   

    for (let i = 0; i < nums.length; i++) {
        calpr *= nums[i]
        prefix.push(calpr)
    }

    for (let i = (nums.length) - 1; i >= 0; i--) {
        calsr *= nums[i]
        sufix.unshift(calsr)
    }
    
   
 if (nums.length === 1) {
        return [1];
    }

    ans.push(sufix[1]); // First element is suffix[1]
    for (let i = 1; i < nums.length - 1; i++) {
        ans.push(prefix[i - 1] * sufix[i + 1]);
    }
    ans.push(prefix[nums.length-2]);
return ans 


};