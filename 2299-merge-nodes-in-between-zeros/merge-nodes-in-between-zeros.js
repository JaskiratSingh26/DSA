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
var mergeNodes = function (head) {

    let temp = head
    let sum = 0

    let data = []

    while (temp) {

        if (temp.val == 0) {
            if (sum != 0) {

                data.push(sum)
            }

            sum = 0
        }
        else {
            sum += temp.val
        }
        temp = temp.next
    }

let newHead=new ListNode(0)
temp=newHead

let i=0

while(i<data.length){
    temp.next=new ListNode(data[i])
    temp=temp.next

    i++
}

return newHead.next
};