/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let set=new Set()

    for(let i=0;i<digits.length;i++){


        for(let j=0;j<digits.length;j++){


            for(let k=0;k<digits.length;k++){

                if(i==j||j==k||i==k){
                    continue
                }

                let num=digits[i]*100  +digits[j]*10  +digits[k]*1
                if(num>=100 && num%2==0)  set.add(num)
            }
        }
    }

    return set.size
};