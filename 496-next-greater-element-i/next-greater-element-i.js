/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let ans = []

    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i])

        let res = -1
        let j = index
        while (j < nums2.length) {
            if (nums2[j] > nums1[i]) {
                res = nums2[j]
                break
            }
            j++
        }
        ans.push(res)
    }

return ans 
};