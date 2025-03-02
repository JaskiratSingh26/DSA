/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

    if(s.length!=goal.length) return false 

    if(s.length<=1 && s.length>=100) return false 

    let firstletter=''
    for(let i=0;i<s.length;i++){
        firstletter=s[0]
        s=s.slice(1)+firstletter
        if(s==goal) return true
    }

    return false 

    
};