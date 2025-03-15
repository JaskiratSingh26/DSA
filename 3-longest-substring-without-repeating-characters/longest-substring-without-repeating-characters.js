/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let arr = []
    let final = []

    for (let i = 0; i < s.length; i++) {


        if (final.length < arr.length) {
            final = arr
            arr = []
        }

        else{
            arr=[]
        }

        for (let j = i; j < s.length; j++) {

            if (!arr.includes(s[j])) {
                arr.push(s[j])
            }

            else {
                break
            }
        }



    }

    
        if (final.length < arr.length) return arr.length
        else return final.length
};