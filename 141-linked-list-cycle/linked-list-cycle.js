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
    let cur=head

    while(cur){
   if(hasmap.has(cur)){
    return true
   }
   else{
    hasmap.set(cur)
   }

        cur=cur.next
    }
    return false 
};