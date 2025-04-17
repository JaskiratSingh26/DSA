/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) {
        return false
    }

    let hashmap = new Map()
    let hashmap2 = new Map()

    for (let i = 0; i < word1.length; i++) {
        if (hashmap.has(word1[i])) {
            hashmap.set(word1[i], hashmap.get(word1[i]) + 1)
        }
        else {
            hashmap.set(word1[i], 1)
        }



         if (hashmap2.has(word2[i])) {
            hashmap2.set(word2[i], hashmap2.get(word2[i]) + 1)
        }
        else {
            hashmap2.set(word2[i], 1)
        }
    }

    const chars1 = Array.from(hashmap.keys()).sort();
    const chars2 = Array.from(hashmap2.keys()).sort();
  
    
    for(let i=0;i<chars1.length;i++){
        if(chars1[i]!=chars2[i]){
            return false 
        }
    }
    
    
     const values1 = Array.from(hashmap.values()).sort();
    const values2 = Array.from(hashmap2.values()).sort();

       for(let i=0;i<chars1.length;i++){
        if(values1[i]!=values2[i]){
         return false 
        }
    }
     return true 
    



};