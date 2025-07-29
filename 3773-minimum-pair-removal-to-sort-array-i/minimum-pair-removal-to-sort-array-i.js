/**
* @param {number[]} nums
* @return {number}
*/
var minimumPairRemoval = function (nums) {
    if (nums.length == 0 || nums.length == 1) return 0
    if (nums.length == 2) {
        if (nums[0] <= nums[1]) return 0
    }
    let count = 0
    let min = Infinity
    let data = [-1, -1]

    let flag = true
    let check = false

    while (flag) {
        check = false
        data = [-1, -1]
        min = Infinity

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) check = true
        }


        if (check == false) break

        for (let i = 0; i < nums.length - 1; i++) {

            if (nums[i] + nums[i + 1] < min) {
                let currSum = nums[i] + nums[i + 1]
                min = currSum;
                data = [i, i + 1]
            }



        }
        let inserted = nums[data[0]] + nums[data[1]]

        nums[data[0]] = inserted
        nums.splice(data[1], 1)

        count++


    }
    return count
};