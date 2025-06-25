/**
 * @param {number} n
 * @return {number}
 */

 let mod=BigInt((10**9)+7)
var countGoodNumbers = function (n) {
    n=BigInt(n)
    if (n == 0) return n

 let even = BigInt(5);
let odd = BigInt(4);

    if (n % BigInt(2) == BigInt(0)) {
         
         return  Number((helper(even,n/BigInt(2))  * helper(odd,n/BigInt(2))  )%mod)
        
    }
    else {
        return   Number((helper(even,(n+BigInt(1))/BigInt(2)) * helper (odd,n/BigInt(2)))%mod)
    }
};


function helper(a,b){
    let res=BigInt(1)
    while(b>0){
        if(b%BigInt(2)==BigInt(1)){
            res=(res*a)%mod
           
        }
        a=(a*a)%mod
      b = b / BigInt(2);
    }
    return res 
}