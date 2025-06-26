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

 let count=1
var maxDepth = function(root) {
    return depth(root)
};
function depth(root){
    if(!root) return 0

    let left=depth(root.left)
    let right =depth(root.right)
    return 1+Math.max(left,right)
   }