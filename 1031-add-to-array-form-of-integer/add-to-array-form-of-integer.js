/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
 let nums=BigInt(num.join(''));

  let ans=[]
  k=BigInt(k)
  nums+=k
  nums=String(nums)
  
  for(let i=0;i<nums.length;i++){
    ans.push(Number(nums[i]))
  }  
  return ans 
};