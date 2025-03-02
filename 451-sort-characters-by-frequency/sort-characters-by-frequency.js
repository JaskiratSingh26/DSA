/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

let map=new Map()

 for(let i=0;i<s.length;i++){

if(map.has(s[i])){
    map.set(s[i],map.get(s[i])+s[i])

}
else{
    map.set(s[i],s[i])
}
}




 const entries = Array.from(map.entries());

  entries.sort(([, valueA], [, valueB]) => valueB.length - valueA.length);



let ans=''
for(let [key,value] of new Map(entries)){
    ans+=value
}



return ans 


    
};