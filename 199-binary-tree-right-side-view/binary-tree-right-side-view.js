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
var rightSideView = function (root) {

    // ddo the just level order and then in each level just pick the last node beaue it will the right side 

    let ans = []
    let queue = []
    let node = root
    let finalans = []
    if (!node) return finalans
    queue.push(node)

    while (queue.length > 0) {
        let size = queue.length
        let subarr = []
        for (let i = 0; i < size; i++) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            subarr.push(node.val)
        }
        ans.push(subarr)
    }

    for (let i = 0; i < ans.length; i++) {
        let data = ans[i].pop()
        finalans.push(data)
    }
    return finalans
};