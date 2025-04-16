/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     let vowels=['a','e','i','o','u','A','E','I','O','U']
    let data=[]
    for(let i=0;i<s.length;i++){
      
    if(vowels.includes(s[i])){
        data.unshift([s[i],i])
    }

    }
    
    
    let ans=''
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            let first=data.shift()
            ans+=first[0]
            
        }
        else{
            ans+=s[i]
        }
    }
    
    return ans 


};