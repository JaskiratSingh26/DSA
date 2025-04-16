/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let list1=[]
    let list2=[]

    for(let i=0;i<nums1.length;i++){
        if(!nums2.includes(nums1[i])){
            if(!list1.includes(nums1[i])){
                list1.push(nums1[i])
            }
        }
    }

    for(let i=0;i<nums2.length;i++){
        if(!nums1.includes(nums2[i])){
            if(!list2.includes(nums2[i])){
                list2.push(nums2[i])
            }
        }
    }

    let ans =[list1,list2]
    return ans 
};