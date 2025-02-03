/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    

let n=0
let first=-1

let last=-1
while(n<nums.length){

   if(nums.length==1  && nums[n]==target){
   first=n
   last=n

   }

    if(nums[n]==target){
        if(first==-1){
            first=n
            last=n
        }
        else if(last!=-1 && first!=-1){
            last=n
        }
    }



    n++
}

let ans =[first,last]
return ans 


};