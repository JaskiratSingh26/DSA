/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {


    let low = 0
    let high = (matrix.length) - 1

    let ans = false
    while (low <= high) {
        let mid = Math.floor((low+ high) / 2)
        let current = matrix[mid]


        if (current[0] <= target && current[(current.length) - 1] >= target) {


            let start = 0
            let end = (current.length) - 1

            while (start <= end) {
                let center = Math.floor((start + end) / 2)

                if (current[center] == target) return true
                else if (current[center] < target) {
                    start = center + 1
                }
                else {
                    end = center - 1
                }
            }
        }

        if (current[current.length - 1] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }

    return ans 
};