/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let product=Number.NEGATIVE_INFINITY
let curpro=1
let arr=[]
  for (let i = 0; i < nums.length; i++) {
      curpro=1
    for (let j = i; j < nums.length; j++) {
        curpro*=nums[j]
        
        product=Math.max(product,curpro)
        
        }
  }
  
      return product
};