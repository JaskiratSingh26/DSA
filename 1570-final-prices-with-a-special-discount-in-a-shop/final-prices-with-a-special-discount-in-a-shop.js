/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {


    let i = 0
    let ans = []

    while (i < prices.length) {

        let current = prices[i]

        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= current) {
                current = current - prices[j]
                break;
            }
        }

        ans.push(current)


        i++
    }

    return ans 
};