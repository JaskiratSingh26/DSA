
var MinStack = function () {

    this.stack = []
    this.min = []

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.min.length == 0) {
        this.min.push(val)
    }
    else {
        if (this.min[(this.min.length) - 1] > val) {
            this.min.push(val)
        }
        else {
            this.min.push(this.min[(this.min.length - 1)])
        }
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

    let minval=this.min[this.min.length-1]
    return minval
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */