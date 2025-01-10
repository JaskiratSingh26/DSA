/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hasmap=new Map()
    for (let v of nums) {
        if (hasmap.has(v)) { // Use has()
            hasmap.set(v, hasmap.get(v) + 1); // Use get() and set()
        } else {
            hasmap.set(v, 1); // Use set()
        }
    }

    for (const [key, value] of hasmap) { // Use for...of with hasmap (or hasmap.entries())
        if (value === 1) {
            return key; // Key is already a number because we used proper Map methods
        }
    }
};