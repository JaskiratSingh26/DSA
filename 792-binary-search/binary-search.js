/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
//     if (nums.length === 0) { // Handle empty array case
//         return -1;
//     }



//    if(nums.length==1 && nums[0]==target){
//     return 0
//    }

// let low=0
// let high=nums.length 

// let mid=0

// while(low<=high){
//     let mid=(low+high)/2
//     if(nums[mid]==target){
//         return mid
//     }

//     else if(nums[mid]<target){
//         low=mid+1
//     }

// else{
//     high=mid-1  
// }
// }

//  return -1


  if (nums.length === 0) {
        return -1;
    }

    let low = 0;
    let high = nums.length - 1; // Correct high index

    while (low <= high) { // The <= is the problem!
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;


};