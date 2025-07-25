/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {

    let arr = new Array(n).fill(0)

    for (let i = 0; i < trust.length; i++) {

        if (arr[trust[i][0] - 1] > 0) {
            arr[trust[i][0] - 1]--
        }

        else if  (arr[trust[i][0] - 1] == 0) {
            arr[trust[i][0] - 1] = -1
           
        }

         arr[trust[i][1] - 1]++
    }


    for(let  i=0;i<arr.length;i++){
        if(arr[i]==n-1) return i+1
   
    }
    return -1

};