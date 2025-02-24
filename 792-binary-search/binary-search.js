/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if(nums.length==1){
        if(nums[0]==target){
            return 0
        }
        else {
            return -1
        }
    }

    

  let low=0
  let  high=(nums.length)-1
    while (low<=high){
    let mid= Math.floor((low+high)/2)
     if(nums[mid]==target){
        return mid
}

else if(nums[mid]<target){
    low=mid+1
    
}

else if(nums[mid]>target){

high=mid-1

}
    }
    return -1


    
};