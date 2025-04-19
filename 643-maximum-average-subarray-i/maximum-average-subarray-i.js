/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let maxnum = -Infinity
    let num = 0


    let i = 0
   

    for (let i = 0; i < k; i++) {
        num += nums[i]
    }

    let avg = num / k

    maxnum = Math.max(avg, maxnum)
     let j = k
    while (j < nums.length) {
        
        num = num - nums[i]
        i++
        num+=nums[j]
        j++
        avg = num / k
        maxnum = Math.max(avg, maxnum)
  
    }



  return parseFloat(maxnum.toFixed(5)); // 


};