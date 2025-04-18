/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let w=0
    let h=0
    let l=0
    let r=height.length-1
    let mostwater=0
    let area=0



    while(l<r){
        w=r-l
        h=Math.min(height[l],height[r])
        area=w*h

        mostwater=Math.max(mostwater,area)


        if(height[l]<height[r]){
            l++
        }
        else{
            r--
        }
    }

    return mostwater
};