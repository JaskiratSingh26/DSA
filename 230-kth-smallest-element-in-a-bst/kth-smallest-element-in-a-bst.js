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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let stack = []
    let node = root

    let ans = []

    while (true) {
        if (node) {
            stack.push(node)
            node = node.left
        }

        else {
            if (stack.length == 0) break
            node = stack.pop()
            ans.push(node.val)

            node = node.right
        }

    }

    return ans[k-1]
};