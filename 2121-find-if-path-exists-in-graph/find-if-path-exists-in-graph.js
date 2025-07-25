/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {

    let map = new Map()

    for (let i = 0; i < edges.length; i++) {

        let a = edges[i][0]
        let b = edges[i][1]

        if (map.has(a)) {

            map.get(a).push(b);
        }
        else {
            map.set(a, [b])
        }


        if (map.has(b)) {
            map.get(b).push(a);
        }
        else {
            map.set(b, [a])
        }
    }

    let visited = new Array(n).fill(false)

    // for(let [key,values] of map){


    //     for(let i=0;i<values.length;i++){
    //         let index=values[i]
    //         visited[index-1]=true
    //     }

    //     if(key==source) {
    //         if(visited[key-1]==true && visited[destination -1]==true) return 
    //     }

    // }
    let stack = [source];
    visited[source] = true;

    while (stack.length) {
        let node = stack.pop();
        if (node === destination) return true;

        for (let neighbor of map.get(node) || []) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        }
    }

    return false;



};