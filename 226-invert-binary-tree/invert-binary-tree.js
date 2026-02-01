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
 * @return {TreeNode}
 */
var invertTree = function (root) {

    if (!root) return null;
    let node = root

    let queue = [node]
    let temp
    while (queue.length > 0) {
        node = queue.shift()
        // 2. Add children to the queue ONLY if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        temp = node.right
        node.right = node.left
        node.left = temp
    }
    return root

};