/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {



    let map = new Map()

    for (let i = 0; i < edges.length; i++) {

        let a = edges[i][0]
        let b = edges[i][1]

        if (map.has(a)) {
            map.set(a, map.get(a) + 1)
        }
        else { map.set(a, 1) }

        if (map.has(b)) {
            map.set(b, map.get(b) + 1)
        }
        else { map.set(b, 1) }


    }

    for(let [key,values] of map){
        if(values>1) return key
    }

};