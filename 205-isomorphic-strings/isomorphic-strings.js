/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map=new Map()
    let arr1=s.split('')
    let arr2=t.split('')
    let char1=arr1[0]
    let char2=arr2[0]

    for(let i=0;i<arr1.length;i++){
        char1=arr1[i]
        char2=arr2[i]

        if(map.has(char1)){
            if(map.get(char1)!=char2) return false
        }
        else{
            map.set(char1,char2)
        }
        
    }



    map.clear()

  for(let i=0;i<arr2.length;i++){
        char1=arr1[i]
        char2=arr2[i]

        if(map.has(char2)){
            if(map.get(char2)!=char1) return false
        }
        else{
            map.set(char2,char1)
        }
        
    }

    

    return true

    
};