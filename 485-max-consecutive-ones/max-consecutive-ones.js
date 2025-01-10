/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if(nums.length<1 || nums.length>(10 **5)) return 0

    let ans = 0
    let aontherans = 0

    for (let v of nums) {

        if (v == 1) {
            ans++
        }
        else {

            if (aontherans < ans) {
                aontherans = ans
                ans =0
            }
            else
            {

                ans = 0
            }
        }



    }
     if (aontherans < ans) {
                aontherans = ans
                
                }
                return aontherans 
};