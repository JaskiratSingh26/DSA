/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {


let low=0
let high=(nums.length)-1

let ans =false
while(low<=high){
    let mid =Math.floor((low+high)/2)

    if(nums[mid]==target){
        ans =true
        return ans
    }
    // Handle duplicates
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
      continue; // Move to the next iteration
    }

    else if(nums[low]<= nums[mid]){
        //left side sorted 

        if(nums[low]<=target && target<=nums[mid]){
            //serach in left side in left seraching
            high=mid-1
        }
        else
        {
            low=mid+1
        }
    }


    else{
        //right side sorted

        if(nums[mid]<= target && target <=nums[high]){
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