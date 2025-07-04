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
var getMinimumDifference = function (root) {

    // do inorder ans them chek the diifrecnde beause in order make the arr sorted 

    let inorder = []
    let node = root
    let ans = Infinity
    
    let stack = []

    while (true) {
        if (node) {
            stack.push(node)
            node = node.left
        }
        else {
            if (stack.length == 0) break
            node = stack.pop()
            inorder.push(node.val)
            node=node.right

        }
    }



    for (let i = 1; i < inorder.length; i++) {
        ans = Math.min(ans, Math.abs(inorder[i] - inorder[i - 1]))
    }
    return ans

};