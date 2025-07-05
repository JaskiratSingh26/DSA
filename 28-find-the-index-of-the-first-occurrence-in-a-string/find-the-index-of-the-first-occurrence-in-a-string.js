/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let ans = -1

    let i = 0
    let j = 0
     

    while (i < haystack.length) {

        if (haystack[i] == needle[j]) {
            if (j ==0) { ans = i }
            if (j == needle.length - 1) return ans
            j++
        }

        else {
            if (j > 0) {
                
                i=ans
            }
            j=0
         ans=-1

        }



        i++
    }
    return -1

};