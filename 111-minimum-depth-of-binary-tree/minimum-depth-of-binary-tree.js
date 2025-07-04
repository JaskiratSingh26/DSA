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
var minDepth = function (root) {

    let minNode = 0
    let node = root
    if (!root) return 0

    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length
        minNode++
        for (let i = 0; i < size; i++) {
            node = queue.shift()
            if (!node.left && !node.right) return minNode
                if (node.left) {
                    queue.push(node.left)
                }


            if (node.right) {
                queue.push(node.right)
            }


        }


    }

};

