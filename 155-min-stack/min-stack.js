
var MinStack = function () {
    this.stack = []
    this.minstack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.minstack.length == 0) {
        this.minstack.push(val)
        this.stack.push(val)
    }
    else {

        if (this.minstack[this.minstack.length - 1] > val) {
            this.minstack.push(val)
            this.stack.push(val)
        }
        else {
            this.minstack.push(this.minstack[this.minstack.length - 1])
            this.stack.push(val)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

    this.stack.pop()
    this.minstack.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minstack[this.minstack.length - 1]

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */