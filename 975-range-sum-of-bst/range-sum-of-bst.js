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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {


    let ans = low + high
    let node = root
    if (!node) return ans
    let queue = []
    queue.push(node)
    while (queue.length > 0) {
        let size = queue.length

        for (let i = 0; i < size; i++) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

            if (node.val < high && node.val > low) ans += node.val
        }
    }

    return ans
};