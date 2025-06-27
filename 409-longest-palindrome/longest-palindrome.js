/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    if (s.length == 1) return 1
    let set = new Set()

    let finalans = 0
    for (let i = 0; i < s.length; i++) {
    
        if (set.has(s[i])) {

            finalans=finalans+2
            set.delete(s[i])
        }
        else { set.add(s[i]) }


    }


    if (set.size == 1 || set.size >1) return finalans + 1


   return finalans

};