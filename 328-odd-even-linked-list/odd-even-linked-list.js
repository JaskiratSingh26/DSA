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
var oddEvenList = function (head) {
    let list = []
    if(head==null|| head.next==null) return head
    let temp = head
    while (temp && temp.next) {
        list.push(temp.val)
        temp = temp.next.next
    }
    if (temp) list.push(temp.val)

    temp = head.next

    while (temp && temp.next) {
        list.push(temp.val)
        temp = temp.next.next
    }

    if (temp) list.push(temp.val)

    temp = head
    for (let i = 0; i < list.length; i++) {
        temp.val = list[i]
        temp = temp.next
    }

    return head



};