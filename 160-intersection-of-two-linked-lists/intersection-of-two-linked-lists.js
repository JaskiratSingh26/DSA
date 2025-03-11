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

    let countA = 1
    let countB = 1
    while (tempA) {
        countA++
        tempA = tempA.next
    }
    while (tempB) {
        countB++
        tempB = tempB.next
    }
    tempA = headA
    tempB = headB

    let result = null
    if (countA >= countB) {
        result = countA - countB

        for (let i = result; i > 0; i--) {
            tempA = tempA.next
        }

        while (tempA) {
            if (tempA == tempB) return tempB
            tempB = tempB.next
            tempA = tempA.next

        }

    



    }
    else {
        result = countB - countA
        for (let i = result; i > 0; i--) {
            tempB = tempB.next
        }

        while (tempB) {
            if (tempB == tempA) return tempB
            tempB = tempB.next
            tempA = tempA.next

        }


    }

    return null
};