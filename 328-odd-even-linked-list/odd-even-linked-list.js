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
var oddEvenList = function(head) {
    
    if(head==null || head.next==null) return head

    let odd=head
    let even=head.next
    let evenhead=head.next
    while(odd.next&& even.next){
        odd.next=even.next
        odd=even.next
        even.next=odd.next
        even=odd.next
    }
    odd.next=evenhead
    return head 
};