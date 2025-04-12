/**
 * @param {number[]} nums
 * @return {number[]}
 */

    var findDisappearedNumbers = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i] > 0 ? nums[i] - 1 : -nums[i] - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            let realindex = i + 1;
            ans.push(realindex);
        }
    }
    return ans;
};
