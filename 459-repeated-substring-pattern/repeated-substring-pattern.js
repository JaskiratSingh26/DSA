/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let doubleS=(s+s).slice(1,-1)
      return doubleS.includes(s)


};