/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  
  if (nums.length <= 1 && nums.length >= 10 ** 5) { return nums }
    if (k <= -1 && k >= 10 ** 5) { return   nums }
   k = k % nums.length;
   

    

    let empty = []

    for (let i = (nums.length) - k; i < nums.length; i++) {
        empty.push(nums[i])
    }

    for (let i = 0; i < (nums.length) - k; i++) {
        empty.push(nums[i])
    }
    for (let i = 0; i < nums.length ; i++) {
        nums[i] = empty[i]
    }
};