/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


  let hash=new Map()
  let looking=0

  for (let i=0;i<nums.length;i++){
   looking=target-nums[i]
   if(hash.has(looking)){
    let data=hash.get(looking)

    let arr=[i,data]
    arr.sort()
    return arr 
   }

   else{
    hash.set(nums[i],i)
   }
  }  
};