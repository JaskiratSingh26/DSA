/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let tempA = headA
    let tempB = headB
    let map = new Map()

    while (tempA) {


        map.set(tempA)


        tempA = tempA.next



    }


    while (tempB) {
        if (map.has(tempB)){
            return tempB
        }

        tempB=tempB.next

  }
    return null

};