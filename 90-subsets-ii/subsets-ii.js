/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    let ans=[]
    nums=nums.sort((a,b)=> a-b)

    helper(nums,[],0,ans)
    return ans
};


function helper(nums,cur,i,ans){
    if(i==nums.length){
        ans.push([...cur])
        return
    }

    cur.push(nums[i])
    helper(nums,cur,i+1,ans)
    cur.pop()
    let index=i+1

    while(index<nums.length && nums[index-1]==nums[index]){
        index++
    }
    helper(nums,cur,index,ans)
}