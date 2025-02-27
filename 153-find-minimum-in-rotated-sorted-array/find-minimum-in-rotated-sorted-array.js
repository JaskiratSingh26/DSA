/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {


   let low=0
   let high=(nums.length)-1

   let ans=Number.MAX_VALUE;

   while(low<=high){
    let mid=Math.floor((low+high)/2)

    if(nums[low]<=nums[mid]){
        //left side sorted 

        if(nums[low]<ans){
            ans=nums[low]
        }
        else{
            low=mid+1

        }

     
    }


    else{
        //right sidde sorted 

    if(nums[mid]<ans){
        ans =nums[mid]
    }
    else
    {
        high=mid-1

    }
    }

      


   }
   return ans 
    
};