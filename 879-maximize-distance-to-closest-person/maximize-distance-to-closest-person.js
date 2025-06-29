/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let left=-1
    let maxdis=0

    for(let i=0;i<seats.length;i++){
        if(seats[i]==1){
         if(left==-1){
            maxdis=i
         }
         else{
            maxdis=Math.max(maxdis,Math.floor((i - left) / 2))

         }
         left=i
        }
    }

  if(seats[seats.length-1]==0){
maxdis = Math.max(maxdis, seats.length - 1 - left);

  }
return maxdis
    
};