/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let finalnode=new ListNode(0)
    let currenode=finalnode

    while(list1 && list2){
      
      if(list1.val<=list2.val){
        currenode.next=list1
        list1=list1.next
      }
      else{
        currenode.next=list2
        list2=list2.next
      }

      currenode=currenode.next
    }

    if(list1){
        currenode.next=list1
    }
    if(list2){
        currenode.next=list2
    }
return finalnode.next
};