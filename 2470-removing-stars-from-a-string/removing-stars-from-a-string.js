/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        if(s[i]!='*'){
            stack.push(s[i])
        }
        else{
            stack.pop()
        }
    }

    let ans =stack.join('')
    return ans 
};