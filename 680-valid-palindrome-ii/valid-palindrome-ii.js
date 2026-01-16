/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    let i = 0
    let j = s.length - 1
    let onedlt = 0
    while (i <= j) {

        if (s[i] != s[j]) {
           return check(s,i+1,j) ||check(s,i,j-1)
        }
        i++
        j--
    }

    return true 

};

function check(s,i,j){
    while(i<=j){
        if(s[i]!=s[j])return false
        else{
            i++
            j--
        }
    }
    return true
}