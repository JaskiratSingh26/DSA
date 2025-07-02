/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function (root, res = []) {
    let stack1 = []
    let stack2 = []
    let ans = []
    let node = root
    if (node == null) return ans
    stack1.push(root)

    while (stack1.length > 0) {
        node = stack1.pop()

        if (node.left) stack1.push(node.left)
        if (node.right) stack1.push(node.right)

        stack2.push(node.val)
    }


    while (stack2.length > 0) {
        ans.push(stack2.pop())
    }
    return ans

}