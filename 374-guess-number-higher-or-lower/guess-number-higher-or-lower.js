/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
      let l=1
        let h=n
        while(l<=h){
            let mid =Math.floor(l+((h-l)/2))

            let number=guess(mid)
            if(number==0) return mid
            else if(number==-1)h=mid-1
            else l=mid+1
        }
    
};