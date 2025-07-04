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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    let newNode = new TreeNode(val, null, null)

    let node = root
    if (!node) return newNode

    while (node && node.val != val) {
        node = node.val < val ? node.right ? node = node.right : node.right = newNode : node.left ? node = node.left : node.left = newNode
    }

    return root
};