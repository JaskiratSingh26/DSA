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

    // for doing this what i am doing is that i am checking the lvel roder and in the end it autmolcciy tell the dpeth 

    let ans = []
    let queue = []
    let node = root
    
    if(node==null) return ans.length
    queue.push(node)
    

    while(queue.length>0){
        let subarr=[]
        let size=queue.length
        for(let i=0;i<size;i++){
            node=queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            subarr.push(node.val)
        }

        ans.push(subarr)
    }

    return ans.length
};