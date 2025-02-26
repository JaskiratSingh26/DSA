/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let low=0
    let high=(nums.length)-1
    let ans=-1

    while(low<=high){
        let mid=Math.floor((low+high)/2)

         
        if(nums[mid]==target){
            ans=mid
            return ans 
        } 


    else if(nums[low]<=nums[mid]){
        //left side sorted 
        if(nums[low]<=target && target<=nums[mid]){
            high=mid-1
            //left side serching

        }
        else{

low=mid+1
//right side  inisde left part searching
        }

    }

    else {
        //right side sorted 
        if(nums[mid]<target && target <=nums[high]){
            low=mid+1
        }
        else
        {
            high=mid-1
        }
    }

    }



return ans 
};