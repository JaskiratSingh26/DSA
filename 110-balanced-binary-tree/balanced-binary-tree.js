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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let balance=helper(root)
    return balance!=-1
};


function  helper(root){
    if (root == null) return 0

    let left = helper(root.left)
    let right = helper(root.right)

    if (left == -1 || right == -1) return -1

    if (Math.abs(left - right) > 1) return -1

    return 1+ (Math.max(left , right)) 
   

}