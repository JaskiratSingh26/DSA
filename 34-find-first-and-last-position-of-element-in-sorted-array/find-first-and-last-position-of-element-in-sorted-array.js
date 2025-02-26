/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    if (nums.length === 0) {
        return [first, last];
    }
    
    // Find the first occurrence
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            first = mid;
            high = mid - 1; // Continue searching to the left
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    // Find the last occurrence
    low = 0;
    high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            last = mid;
            low = mid + 1; // Continue searching to the right
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return [first, last];
};