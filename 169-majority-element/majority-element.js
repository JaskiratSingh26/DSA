/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

      let hashmap=new Map()

    for (let i=0;i<nums.length;i++){

        if(hashmap.has(nums[i])){
              hashmap.set(nums[i], hashmap.get(nums[i]) + 1); // Us
        }

        else{
            hashmap.set(nums[i],1)
        }
    }
    
    
    let index=0
    let ans=0
    
    for(let [key ,value ] of hashmap){
        if(value>=index) {
            index=value
            ans =key
        }
    }
    
return ans 
    
};