/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let start = 0
    let end = 0
    let maxlength=0

    let chararr = new Set()

    if (!s.length) return 0


    while (end < s.length) {
        if (!chararr.has(s[end])){
            chararr.add(s[end])
            end++
            maxlength=Math.max(maxlength,chararr.size)
        }

        else{

            chararr.delete(s[start])
            start++

        }
        

      }
    return maxlength


};