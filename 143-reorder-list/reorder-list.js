/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
        if (!head || !head.next) {
        return head; // Handle edge cases
    }
    let slow=head
    let fast=head

    while(fast && fast.next && fast.next.next){
        slow=slow.next
        fast=fast.next.next
    }

    let secondhead=slow.next
    slow.next=null

    //started reaverse secind head
    let prev=null
    let cur=secondhead
    let temp
    while(cur){

    temp=cur.next
    cur.next=prev
    prev=cur
    cur=temp
    }
    /////seconf head reverse done
    let t1=head
    let t2=prev
    let m1=t1.next
    let m2=t2.next
    while(t2){
         m1 = t1.next;
        m2 = t2.next;
        t1.next = t2;
        t2.next = m1;
        t1 = m1;
        t2 = m2;
    }

return head
};