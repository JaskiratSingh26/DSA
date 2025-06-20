/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let stack = [[p, q]]
    while (stack.length > 0) {
        let [node1, node2] = stack.pop()
        if (!node1 && !node2) continue; // both null → OK
        if (!node1 || !node2) return false; // one null → mismatch
        if (node1.val !== node2.val) return false;



        stack.push([node1.right, node2.right])
        stack.push([node1.left, node2.left])
    }

    return true
};