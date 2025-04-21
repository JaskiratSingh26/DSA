/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let ans = []

    for (let i = 0; i < nums1.length; i++) {
        let current = nums1[i]
        let last=-1

        let index = nums2.indexOf(current)
        for (let j = index; j < nums2.length; j++) {
              if(nums2[j]>current){
                current=nums2[j]
                last=nums2[j]
                break;
              }
        }

        ans.push(last)
    }


    return ans 
};