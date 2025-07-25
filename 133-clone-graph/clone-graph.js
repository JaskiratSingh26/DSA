/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {

    if (!node) return null

    let map = new Map()

    let queue = [node]

    map.set(node, new Node(node.val))

    while (queue.length != 0) {
        let cur = queue.shift()

        for (let neighbor of cur.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            
            }

            map.get(cur).neighbors.push(map.get(neighbor))
        }
    }

return map.get(node)




};