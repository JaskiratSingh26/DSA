/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let bit = 0
    let mask = 1

    for (let i = 0; i < 32; i++) {
       
       if((mask&n)!=0){
        bit++
       }
       mask<<=1
    }
    return bit
};