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

    if(!root) return 0
    let temp = root
    let queue = [temp]
    let ans = []
    

    while (queue.length > 0) {
        let len = queue.length
        let subarr = []
        for (let i = 0; i < len; i++) {

            let node = queue.shift()

            subarr.push(node)

            if (node && node.left ) { queue.push(node.left) }
            if (node &&node.right) { queue.push(node.right) }
        }


        ans.push(subarr)
    }


let maxdepth=ans.length
return maxdepth
};