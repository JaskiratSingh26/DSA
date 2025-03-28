
var MinStack = function () {
    this.arr = []
    this.minval = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    if (this.arr.length == 0) {
        this.minval = val
        this.arr.push([val, this.minval])
        return val
    }

    else {
        if (this.minval >= val) {
            this.minval = val
            this.arr.push([val, this.minval])
            return val
        }
        else {
            this.arr.push([val, this.minval])
            return val
        }
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
let first=this.arr.pop()
 if(this.arr.length > 0){
        this.minval = this.arr[this.arr.length-1][1];
    } else {
        this.minval = null;
    }

    return first[0]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let first = this.arr[(this.arr.length) - 1]
    return first[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

    let min = this.arr[(this.arr.length) - 1]
    return min[1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */