/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let hashmap = new Map()

    for (let i = 0; i < answers.length; i++) {
        if (hashmap.has(answers[i])) {
            hashmap.set(answers[i], hashmap.get(answers[i]) + 1)
        }

        else {
            hashmap.set(answers[i], 1)
        }
    }


    let min = 0

    for (let [vlaues, index] of hashmap) {

          let groupSize = vlaues + 1;
        let numGroups = Math.ceil(index / groupSize);
        min += numGroups * groupSize;
    }

    return min
};