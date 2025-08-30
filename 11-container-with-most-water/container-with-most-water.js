/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let base = 0
    let max = 0
    let high = 0

    let left = 0
    let right = height.length - 1


    while (left < right) {
        base = right - left
        high = Math.min(height[left], height[right])
        max = Math.max(max, high * base)

        if (height[left] < height[right]) left++
        else right--

    }

return max 
};
