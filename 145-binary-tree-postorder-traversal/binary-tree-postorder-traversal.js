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

var postorderTraversal = function (root,res=[]) {

    if(!root) return []

    let node=root

    postorderTraversal(node.left,res)
    postorderTraversal(node.right,res)
    postorderTraversal(node.root,res)

    res.push(node.val)

    return res
  
}