/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let hasmap=new Map()
  let temp=head
   while(temp){

    if(hasmap.has(temp)) return true

    

 hasmap.set(temp,true)
    temp=temp.next
   }
   return false

};