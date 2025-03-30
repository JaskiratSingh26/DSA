/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let mostwater = 0

    let w = 0
    let h = 0
    let area = 1
    let leftpointer=0
    let rightpointer=(height.length)-1

    while(leftpointer<rightpointer){
        
        w=rightpointer-leftpointer
        h=Math.min(height[leftpointer],height[rightpointer])
        area=w*h
        mostwater=Math.max(mostwater,area)

        if(height[leftpointer]<height[rightpointer]) {
            leftpointer++
        }
        else{
            rightpointer--
        }


    }

    return mostwater
   

};