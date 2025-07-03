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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    let ans = []

    let queue = []

    let node = root

    if (node == null) return ans
    let zigzag = false

    queue.push(node)

    while (queue.length > 0) {
        let subarr = []
        let size = queue.length
        for (let i = 0; i < size; i++) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)



            if (zigzag) subarr.unshift(node.val)
            else subarr.push(node.val)


        }

        if (!zigzag) zigzag = true
        else zigzag = false
        ans.push(subarr)
    }

    return ans
};