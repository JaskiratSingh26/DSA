/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let list1 = new ListNode(0)
    let l1 = list1
    let list2 = new ListNode(0)
    let l2 = list2

    let temp = head
    while (temp) {

        if(temp.val<x){
            l1.next=temp
            l1=l1.next

        }
        else{
            l2.next=temp
            l2=l2.next
        }
        temp = temp.next
    }
    l2.next=null
    l1.next=list2.next
    return list1.next
};