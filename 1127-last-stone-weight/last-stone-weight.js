/**
 * @param {number[]} stones
 * @return {number}
 */
 

 var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        // Sort descending to get the two heaviest stones at the end
        stones.sort((a, b) => b - a);

        let stone1 = stones.shift(); // heaviest
        let stone2 = stones.shift(); // second heaviest

        if (stone1 !== stone2) {
            stones.push(stone1 - stone2); // push the resulting stone
        }
        // else, both stones destroyed
    }

    // Return the last stone or 0
    return stones.length === 1 ? stones[0] : 0;
};