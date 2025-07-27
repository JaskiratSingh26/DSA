/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let max = -Infinity
    let min = Infinity

    for (let num of nums) {
        max = Math.max(max, num)
        min = Math.min(min, num)
    }

    let minheap = new Array(max - min + 1).fill(0)

    for (let num of nums) {
        minheap[num - min]++
    }

    let count = 0
    for (let i = minheap.length - 1; i >= 0; i--){
        count=count+minheap[i]
        if(count>=k) return i+min
    }

};