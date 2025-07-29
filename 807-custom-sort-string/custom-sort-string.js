/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let arr=s.split('')
    let visited=new Array(s.length).fill(false)
    let sorted=[]
    
    for(let i=0;i<order.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]==order[i]){
                sorted.push(arr[j])
                visited[j]=true
            }
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(!visited[i]){
            sorted.push(arr[i])
        }
    }
    return sorted.join("")
};