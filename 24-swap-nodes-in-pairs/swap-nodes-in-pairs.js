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
var swapPairs = function(head) {

     if (!head || !head.next) {
        return head; // Nothing to swap if the list is empty or has only one node
    }

    let dummy = new ListNode(0); // Create a dummy node to simplify the head manipulation

    let prev = dummy;
    let current = head;

    while (current && current.next) {
        let first = current;
        let second = current.next;

        // Perform the swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move pointers for the next pair
        prev = first;
        current = first.next;
    }

    return dummy.next;
};