/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head

    let slow = head
    for (let i = 0; i < n; i++) {
        if (!fast) return head; // Handle n being larger than list length
        fast = fast.next;
    }

    if (!fast) return head.next; // Handle removing the head node

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return head;


};