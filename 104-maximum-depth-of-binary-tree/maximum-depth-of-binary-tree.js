
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
    if (!root) return 0
    let res = []
    let cur = root
    let queue = [cur]


    while (queue.length != 0) {
        let n = queue.length
        let node;
        let subarr = []
        for (let i = 0; i < n; i++) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            subarr.push(node.val)
        }
        res.push(subarr)
    }

    return res.length
};