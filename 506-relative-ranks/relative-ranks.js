/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {


    let hashmap = new Map()

    for (let i = 0; i < score.length; i++) {
        hashmap.set(score[i], i)
    }


    let first = -1
    let second = -1
    let third = -1

    for (let [values, index] of hashmap) {
        if (values >= first) {
            third = second
            second = first
            first = values
        }
        else if (values > second) {
            third = second
            second = values
        }

        else if (values > third) {
            third = values
        }
    }




    let ans = []
    let sorted = [...score].sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        if (score[i] == first) {
            ans.push("Gold Medal")
        }
        else if (score[i] == second) {
            ans.push("Silver Medal")

        }

        else if (score[i] == third) {
            ans.push("Bronze Medal")
        }


        else {

            let rank = sorted.indexOf(score[i]) + 1;

            ans.push(`${rank}`)
        }
    }

    return ans


};