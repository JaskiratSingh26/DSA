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
var levelOrder = function(root) {
 let ans =[]
 let queue=[]
    if(!root) return ans
    

    queue.push(root)
    while(queue.length>0){
       let subarr=[]
        let size=queue.length

         for(let i=0;i<size;i++){
             let node=queue.shift()
             
             if(node.left)queue.push(node.left)
             if(node.right) queue.push(node.right)
             subarr.push(node.val)
         }

         ans.push(subarr)


    }
return ans
};

