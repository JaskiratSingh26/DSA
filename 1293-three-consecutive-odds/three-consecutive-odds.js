/**
 * @param {arrber[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {



   if(arr.length<3) return false


   for(let i=2;i<arr.length;i++){

     if(arr[i]%2!=0 && arr[i-1]%2!=0 && arr[i-2]%2!=0) return true
   }
   
return false 

};