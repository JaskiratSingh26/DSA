/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   
    let data=''
    for(let i=(s.length)-1;i>=0;i--){
        data+=s[i]
    }

    let ans=''
    let word=[]
for(let i=0;i<data.length;i++){


if(data[i]!=' '){
    word.unshift(data[i])
}


else{

    if(word.length>0){

    word=word.join('')
    ans+=' '+ word
    word=[]
    }
}

}
 word=word.join('')
    ans+=' '+ word
ans =ans.trim()
    return ans 

    
};