/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {

    let s = ''
    let temp = head

    while (temp) {
        s += temp.val
        temp = temp.next
    }


    // s = Number(s)

    // s = s * 2

    // s = `${s}`

    const bigNum = BigInt(s);
    const doubledBigNum = bigNum * BigInt(2);
    s= String(doubledBigNum);
    let i = 1
    let newhead = new ListNode(parseInt(s[0]))
    let currenthead = newhead

    while (i < s.length) {
        currenthead.next = new ListNode(parseInt(s[i]))
        currenthead = currenthead.next
        i++
    }


    return newhead
};