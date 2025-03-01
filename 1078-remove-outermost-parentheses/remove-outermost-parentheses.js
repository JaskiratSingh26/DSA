/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let data=s.split('')
    let ans =[]
    let count=0

    for(let i=0;i<data.length;i++){
        if(data[i]=='('){

if(count>0){
    ans.push('(')
}

    count++
        }
        else{
            count--
            if(count>0){
                ans.push(')')
            }
        }
    }
    return ans.join('')
};