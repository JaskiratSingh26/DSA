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
var maxDepth = function (root) {
    if(root==null) return 0
    let queue = [root]
    let count = 0
    let node

    while (queue.length > 0) {
        let n = queue.length
        for (let i = 0; i < n; i++) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        count++



    }
return count
};