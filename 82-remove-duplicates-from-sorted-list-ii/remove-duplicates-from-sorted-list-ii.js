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
var deleteDuplicates = function(head) {
    
    let initalArray=[]
    let temp=head
    while(temp){
        initalArray.push(temp.val)
        temp=temp.next
    }
  let storing=null
  let result=[]
    
  for(let value  in initalArray){
    storing=initalArray[value]
    initalArray[value]='empty'
    if(!initalArray.includes(storing)){
        result.push(storing)
    }
    initalArray[value]=storing
  }

   let newHead=new ListNode(0)
   let pointer=newHead
    for(let v of result){
        pointer.next=new ListNode(v)
        pointer=pointer.next
    }

    return newHead.next
};