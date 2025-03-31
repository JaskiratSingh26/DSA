/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
 
 let cur=head
 let arr=[]
while(cur){

    arr.push(cur)
    cur=cur.next
}

  let index = arr.length - n;

if(arr.length==1 && n==1){
    return null
}

if(index==0){
    return head.next
}

let prev=arr[index -1]

prev.next=prev.next.next
return head

//    let fast = head

//     let slow = head
//     for (let i = 0; i < n; i++) {
//         if (!fast) return head; // Handle n being larger than list length
//         fast = fast.next;
//     }

//     if (!fast) return head.next; // Handle removing the head node

//     while (fast.next) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     slow.next = slow.next.next;

//     return head;



};