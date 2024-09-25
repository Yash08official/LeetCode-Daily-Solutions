class Calculator {
    /**
     * @private
     */
    x;

    /**
     * @param {number} value
     */
    constructor(value) {
        this.x = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.x += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.x -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.x *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.x /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.x **= value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.x;
    }
}