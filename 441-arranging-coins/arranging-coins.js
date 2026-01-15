/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

    let i=1

    let ans=0

    while(i<=n){
        n=n-i
        ans++
        i++
    }
    return ans 
    
};