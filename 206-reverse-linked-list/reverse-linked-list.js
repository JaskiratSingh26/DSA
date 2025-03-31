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
    

let cur=head
let trav=head
let arr=[]

 
 while(trav){
    arr.push(trav.val)
    trav=trav.next
 }

trav=cur
 for(let i=arr.length-1;i>=0;i--){
    trav.val=arr[i]
    trav=trav.next
 }
 return cur 

};