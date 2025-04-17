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
    

    if(head==null)return null
    let temp=head
    let prev=null
    let cur=head.next

    while(temp){
        cur=temp.next
        temp.next=prev
        prev=temp
        temp=cur
    }

    return prev 


};