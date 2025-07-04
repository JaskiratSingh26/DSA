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
 * @return {boolean}
 */
var isValidBST = function (root) {

    // we will do the inorder acn check is it is increse ithen it its vaild tree

    let stack = []
    let inorder = []
    let node = root

    while (true) {
        if (node) {
            stack.push(node)
            node = node.left
        }
        else {
            if (stack.length == 0) break
            node = stack.pop()
            inorder.push(node.val)
            node = node.right
        }
    }

    for (let i =0; i < inorder.length-1; i++) {
        if (inorder[i] >= inorder[i + 1]) return false
    }

    return true
};