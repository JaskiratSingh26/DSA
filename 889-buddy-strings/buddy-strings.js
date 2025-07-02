/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false

    if (s == goal) {
        // let map = new Map()

        // for (let i = 0; i < s.length; i++) {
        //     if (map.has(s[i])) {
        //         map.set(s[i], map.get(s[i]) + 1)
        //     }

        //     else {
        //         map.set(s[i], 1)
        //     }
        // }

        // let count=0

        // for(let [key,values] of map){
        //     if(values>1) count++
        // }

        // if(count==1) return true
        // return false
        let set = new Set(s);
        return set.size < s.length; 

    }


    let index=[]

    for(let i=0;i<s.length;i++){
        if(s[i]!=goal[i]) index.push(i)
    }

    if(index.length==2){


        let sarr=s.split('')
        let temp=sarr[index[1]]
        sarr[index[1]]=sarr[index[0]]
        sarr[index[0]]=temp


        if(sarr.join('')==goal) return true
        return false 



    }

    return false 


};

