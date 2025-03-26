
var MyQueue = function() {

  this.s1=[]  
  this.s2=[]  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
this.s1.push(x)

return this.s1




};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    

        
    if (this.s2.length === 0){
      let first=this.s1.shift()
      return first
    }

    while (this.s1.length > 1) {
        this.s2.push(this.s1.shift());
    }

    const first = this.s1[0]

    [this.s1, this.s2] = [this.s2, this.s1];

    return first;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     
    if (this.s2.length === 0){
      return this.s1[0];
    }

    while (this.s1.length > 0) {
        this.s2.push(this.s1.shift());
    }

    const first = this.s2[this.s2.length-1];

    [this.s1, this.s2] = [this.s2, this.s1];

    return first;
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */