/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let ans=[]

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
    helper(nums,cur,i+1,ans)
}