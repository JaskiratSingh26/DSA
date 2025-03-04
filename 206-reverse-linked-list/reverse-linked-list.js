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
var reverseList = function(head) {
    
    let prev=null
    let temp=head
    let front=null
    while(temp){
        front=temp.next
        temp.next=prev
        prev=temp
        temp=front
    }

    return prev

};