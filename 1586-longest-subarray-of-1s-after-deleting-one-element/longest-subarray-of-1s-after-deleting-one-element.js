/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {


    let i = 0
    let j = 0
    let count = 0
    let curlength = 0
    let maxlength = 0


    while (j < nums.length) {

        if (nums[j] == 0) {
            count++
        }

        // if (count != 0) {
        //     while (count != 0) {


        //         if (nums[i] == 0) {
        //             count--
        //         }
        //         i++
        //     }
        // }

        while (count >1) {
            if (nums[i] === 0) {
                count--;
            }
            i++;
        }
        // while (count > 1) {
        //     if (nums[i] === 0) {
        //         count--;
        //     }
        //     i++;
        // }






        curlength = (j - i) 
        maxlength = Math.max(curlength, maxlength)
        j++
    }



    return maxlength

};