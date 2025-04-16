/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {


    let ans = []
    let highestcandies = 0
    for (let i = 0; i < candies.length; i++) {
        if (highestcandies <= candies[i]) {
            highestcandies = candies[i]
        }
    }

    for (let i = 0; i < candies.length; i++) {
        let totalcandies = candies[i] + extraCandies
        if (totalcandies >= highestcandies) {
            ans.push(true)
        }
        else {
            ans.push(false)
        }
    }
    return ans 

};