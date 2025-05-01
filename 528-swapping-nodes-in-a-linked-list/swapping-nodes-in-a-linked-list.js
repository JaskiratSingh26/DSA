/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {

    let temp = head
    let length = 0
    let count = 0
    let first = 0
    let last =0

    while (temp) {
        length++
        count++
        if (count == k) {
            first = temp.val
        }
        temp = temp.next
    }



    let target = (length - k) + 1

    temp = head
    count = 0

    while (temp) {
        count++
        if (count == target) {
            last = temp.val
        }


        temp = temp.next
    }


    temp = head
    count = 0

    let secondcount = 0


    while (temp) {
        count++
        secondcount++
        if (temp.val == first && count == k) {

            temp.val = last

        }

        else if (temp.val == last && secondcount == target) {
            temp.val = first
        }


        temp = temp.next
    }


    return head
};