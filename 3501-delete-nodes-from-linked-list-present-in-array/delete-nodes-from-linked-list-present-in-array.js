/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    if (!head) {
        return null
    }
    if(nums.length<0 || nums.length>(10**5))return null

    let set=new Set(nums)

    while (set.has(head.val)) {
        head = head.next
    }



    let cur = head
    while (cur && cur.next) {

        if (set.has(cur.next.val)) {
            cur.next = cur.next.next
        }
        else {
            cur = cur.next
        }





    }


    return head



};