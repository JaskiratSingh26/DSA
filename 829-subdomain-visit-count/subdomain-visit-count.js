/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {

       
    let ans = []

    let hashmap = new Map()

    for (let i = 0; i < cpdomains.length; i++) {
        let number = ''
        let j = 0

        while (j < cpdomains[i].length) {
            if (cpdomains[i][j] >= 0 || cpdomains[i][j] <= 9) {
                number += cpdomains[i][j]
                j++
            }
            else{
                
            break
            }
        }

        let restword = cpdomains[i].slice(j)
        restword.trim()
        number = Number(number)
        let singleword = ''
        let wordArr = []
       
        
   

        for (let k = restword.length - 1; k >=0; k--) {
            
            if (restword[k] == '.') {
                singleword = wordArr.join('')
              

                if (hashmap.has(singleword)) {
                    hashmap.set(singleword, hashmap.get(singleword) + number)
                }
                else {
                    hashmap.set(singleword, number)
                }


                wordArr.unshift(restword[k])

            }

            else {
                wordArr.unshift(restword[k])

            }
        }
            singleword = wordArr.join('')
             

                if (hashmap.has(singleword)) {
                    hashmap.set(singleword, hashmap.get(singleword) + number)
                }
                else {
                    hashmap.set(singleword, number)
                }



    }

    for (let [key, values] of hashmap) {
        let res = `${values} ${key}`
        ans.push(res)
    }
    
    return ans 
};