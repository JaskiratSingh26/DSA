/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let ans = []

    if (nums1.length > nums2.length) {
        for (let i = 0; i < nums2.length; i++) {
            if (nums1.includes(nums2[i])) {

                if(!ans.includes(nums2[i])){

                ans.push(nums2[i])
                }
            }

        }
    }
    else{
         for (let i = 0; i < nums1.length; i++) {
             if (nums2.includes(nums1[i])) {

                if(!ans.includes(nums1[i])){

                ans.push(nums1[i])
                }
            }

        }
    }

    return ans 
};