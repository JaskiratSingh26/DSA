
var MinStack = function() {
    this.arr=[]
    this.minans=null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.arr.length==0) {
        this.minans=val

        this.arr.push(val)
        return val
    }

    else{
        if(this.minans>val) this.minans=val
        this.arr.push(val)
        return val
    }



    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    return this.arr.pop()
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let first=this.arr[(this.arr.length)-1]
    return first
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let ans=this.arr[0]
for(let v of this.arr){
    if(v<ans) ans=v
}

return ans
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */