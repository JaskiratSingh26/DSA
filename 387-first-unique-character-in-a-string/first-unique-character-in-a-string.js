/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    let hashmap = new Map()

    for (let i = 0; i < s.length; i++) {

        if (hashmap.has(s[i])) {
            hashmap.set(s[i],-1)
        }

        else {
            hashmap.set(s[i], i)
        }
    }

        for(let [values,index] of hashmap){
            if(index!=-1){
                return index
            }
        }

    

    return -1

};