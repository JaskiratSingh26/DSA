/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0
    let j = 0
    let count = 0
    let maxnum = 0

    let curlength = 0

    while (j < nums.length) {
        
        if (nums[j] == 0) {
            count++
        }

        if (count > k) {
            while (count > k) {
                if (nums[i] == 0) {
                    count--

                }

                i++
            }
        }


        curlength = (j - i)+1
        maxnum = Math.max(curlength, maxnum)
        j++
    }


    return maxnum
};