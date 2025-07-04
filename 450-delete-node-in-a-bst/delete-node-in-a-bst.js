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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

 if (!root) return null;

    let parent = null;
    let node = root;

    // Step 1: Find the node to delete
    while (node && node.val !== key) {
        parent = node;
        if (key < node.val) {
            node = node.left;
        } else {
            node = node.right;
        }
    }

    if (!node) return root; // Key not found

    // Step 2: Save left and right subtrees
    let leftSubtree = node.left;
    let rightSubtree = node.right;

    // Step 3: Attach right subtree to rightmost node of left subtree
    if (leftSubtree) {
        let temp = leftSubtree;
        while (temp.right) {
            temp = temp.right;
        }
        temp.right = rightSubtree;
    }

    // Step 4: Replace node with new subtree
    let newSubtree = leftSubtree ? leftSubtree : rightSubtree;

    if (!parent) {
        // Deleting the root node
        return newSubtree;
    }

    if (parent.left === node) {
        parent.left = newSubtree;
    } else {
        parent.right = newSubtree;
    }

    return root;

};