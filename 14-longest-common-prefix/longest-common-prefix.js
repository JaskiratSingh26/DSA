/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {


strs=strs.sort()

let first=strs[0].split('')
let last=strs[(strs.length)-1].split('')
let ans =''
let i=0
for(i=0;i<first.length;i++){
    if(first[i]==last[i]){
        ans+=first[i]
    }
    else
    {
        break;
    }
}

return ans 
        



};