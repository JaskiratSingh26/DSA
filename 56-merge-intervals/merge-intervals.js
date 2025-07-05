/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0])


    let merge = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let last = merge[merge.length - 1]
        let current = intervals[i]

        if (last[1] >= current[0]) {
            // merege kro

            last[1] = Math.max(last[1], current[1])
        }
        else {
            merge.push(current)
        }
    }
    return merge
};