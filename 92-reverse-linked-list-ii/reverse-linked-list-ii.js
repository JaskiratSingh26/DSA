/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {


    if (left == 1 && right == 1) return head
    let cur = head


    let count = 1

    let starting = null
    let ending = null



    while (cur) {

        if (count + 1 == left) {
            starting = cur
        }
        if (count == right) {
            ending = cur
            break
        }

        count++
        cur = cur.next
    }

    let pointToLink = ending.next
    let start=null

    if (left == 1) {
        start = head

    }
    else {
         start = starting.next
    }

    //now reverse the start and end 

    let prev = null
    cur = start
    let next = null
    ending.next = null

    while (cur) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

  if(starting){

    starting.next = prev
  }
  else{
    head=prev
  }
start.next=pointToLink
return head 

};