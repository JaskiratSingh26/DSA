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
var insertionSortList = function (head) {


    let arr = []

    let temp = head
    while (temp) {
        arr.push(temp.val)
        temp = temp.next
    }

    arr.sort((a, b) => a - b)



    temp = head


    while (temp) {
        temp.val = arr[0]
        arr.shift()

        temp = temp.next
    }


    return  head 
};