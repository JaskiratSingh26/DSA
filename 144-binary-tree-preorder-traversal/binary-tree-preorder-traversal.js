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
var preorderTraversal = function (root) {
    if (!root) return []
    let stack = [root]
    let ans = []
    while (stack.length > 0) {
        let node = stack.pop()
        ans.push(node.val)
              // Push right first so that left is processed first (LIFO behavior)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);



    }
    return ans

};