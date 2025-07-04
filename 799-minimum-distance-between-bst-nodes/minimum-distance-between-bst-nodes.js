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
 * @return {number}
 */
var minDiffInBST = function (root) {
    let stack = []
    let inorder = []

    while (true) {
        if (root) {
            stack.push(root)
            root = root.left
        }
        else {
            if (stack.length == 0) break
            root = stack.pop()
            inorder.push(root.val)
            root = root.right
        }
    }

    let min = Infinity

    for (let i = 1; i < inorder.length; i++) {
        min = Math.min(min, inorder[i] - inorder[i - 1])
    }
    return min
};