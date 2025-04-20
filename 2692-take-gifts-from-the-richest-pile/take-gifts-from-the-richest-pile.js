/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {




    while (k != 0) {
        let max = -Infinity
        let index = 0
        for (let i = 0; i < gifts.length; i++) {

            if (max <= gifts[i]) {
                max = gifts[i]
                index = i
            }



        }

        let result = Math.floor(Math.sqrt(max))

        gifts[index] = result
        k--


    }



    let ans = 0
    for (let i = 0; i < gifts.length; i++) {
        ans += gifts[i]
    }


    return ans
};