/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.q = new Array(k);
    this.front = 0;
    this.size = 0;
    this.capacity = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) {
        return false;
    }
    if (!this.isEmpty()) {
        this.front = (this.front - 1 + this.capacity) % this.capacity;
    }
    this.q[this.front] = value;
    this.size++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) {
        return false;
    }
    let idx = (this.front + this.size) % this.capacity;
    this.q[idx] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.q[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    let idx = (this.front + this.size - 1) % this.capacity;
    return this.q[idx];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;
};