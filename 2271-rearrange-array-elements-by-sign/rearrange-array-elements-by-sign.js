/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {

    let postive = []
    let negative = []
    let ans = []


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) negative.push(nums[i])
        else {
            postive.push(nums[i])
        }
    }

    let pPointer = 0
    let nPointer = 0




while(pPointer<postive.length  ) {
        ans.push(postive[pPointer])
        pPointer++
        ans.push(negative[nPointer])
        nPointer++
    }

    return ans 
};