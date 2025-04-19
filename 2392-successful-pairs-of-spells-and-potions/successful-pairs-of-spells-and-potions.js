/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {

    let ans = []

    potions.sort((a, b) => a - b)

    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i]
        let low = 0
        let high = potions.length - 1

        while (low < high) {
            let mid = Math.floor((low + high) / 2)

            if (spell * potions[mid] >= success) {
                high = mid - 1
            }
            else {
                low = mid + 1
            }
        }

        if (spell * potions[low] >= success) {


            let result = potions.length - low
            ans.push(result)
        }
        else {
            let result = potions.length - low -1
            ans.push(result)
        }
    }

    return ans
};