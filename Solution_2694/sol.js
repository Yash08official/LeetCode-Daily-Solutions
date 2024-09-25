class EventEmitter {
    /**
     * @private
     */
    d = new Map();

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.d.has(eventName)) {
            this.d.set(eventName, new Set());
        }
        this.d.get(eventName).add(callback);
        return {
            unsubscribe: () => {
                this.d.get(eventName)?.delete(callback);
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const callbacks = this.d.get(eventName);
        if (!callbacks) {
            return [];
        }
        return [...callbacks].map(callback => callback(...args));
    }
}