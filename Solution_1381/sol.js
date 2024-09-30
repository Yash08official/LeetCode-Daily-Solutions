/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = new Array(maxSize).fill(0);
    this.top = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.top < this.stack.length - 1) {
        this.top++;
        this.stack[this.top] = x;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.top !== -1) {
        return this.stack[this.top--];
    }
    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for (let i = 0; i < Math.min(k, this.top + 1); i++) {
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */