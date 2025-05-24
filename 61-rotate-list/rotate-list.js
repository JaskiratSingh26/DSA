/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let temp=head
    let length=1

    if(!head||head.next==null  ) return head 

    while(temp.next){
        length++
        temp=temp.next

    }

    if(k%length==0) return head
    if(k>length){k=k%length}

temp=head
let target=length-k
length=1
let newHead=null
while(temp.next){
    if(length==target){
        newHead=temp.next
        temp.next=null

        break
    }
    
    temp=temp.next
    length++

}


temp=newHead

while(temp.next){
    temp=temp.next
}

temp.next=head
return newHead 
    


    
};