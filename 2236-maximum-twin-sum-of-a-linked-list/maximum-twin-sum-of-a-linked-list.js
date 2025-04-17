/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let temp = head
    let arr = []
 

    while (temp) {
        arr.push(temp.val)

        temp = temp.next
    }

    let maxsum=-Infinity


    let n=arr.length
    for(let i=0;i<n;i++){
        let cursum=arr[i]+arr[n-1-i]
        maxsum=Math.max(cursum,maxsum)
    }

    return maxsum
};