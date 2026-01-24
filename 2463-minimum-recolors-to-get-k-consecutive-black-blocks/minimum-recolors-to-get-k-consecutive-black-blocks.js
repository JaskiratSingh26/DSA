/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {

    let min = Infinity
    let count = 0
    for (let i = 0; i < blocks.length; i++) {

        for (let j = i; j < blocks.length; j++) {
 if (blocks[j] == 'W') count++

            if(((j-i)+1)==k){
                min=Math.min(min,count)
                count=0
                break
            }
           
        }
    }
    return min
};