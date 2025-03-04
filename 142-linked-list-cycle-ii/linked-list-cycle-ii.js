/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
   let hasmap = new Map();
    let temp = head;
    let count = 0;

    while (temp) {
        if (hasmap.has(temp)) {
            return temp // Return the position (count)
        }
        hasmap.set(temp, count); // Store the node and its position
        count++;
        temp = temp.next;
    }
    return null 
    
};