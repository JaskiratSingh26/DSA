
var MyStack = function () {
    this.q1 = []
    this.q2 = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
    return x

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
   

    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift())
    }

    let last=this.q1.shift()
    let dump = this.q1
    this.q1 = this.q2
    this.q2 = dump

return last

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {


    while (this.q1.length >  1) {
        this.q2.push(this.q1.shift())
    }

    let top = this.q1.shift()
    this.q2.push(top)
    let dump = this.q1
    this.q1 = this.q2
    this.q2 = dump
    return top


};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (this.q1.length == 0 ) return true
    else return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */