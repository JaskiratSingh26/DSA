/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let data=num.split('')
     let ans ='noans';
     let array=[]

     for(let i=(data.length)-1;i>=0;i--){

        if(data[i]%2==1){
            ans=i
            break
        }
        
      
     }
  

if(ans=='noans'){
    return ""
}
else{
//     for(let i=0;i<=ans;i++){
//     array.push(data[i])

// }
//   return array.join('')

array=data.slice(0,ans+1)
return array.join('')
  
}


    
};