var TimeLimitedCache = function() {
    this._cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isExist = this._cache.has(key);

    if (!this._isExpired(key)) {
        this._cache.set(key, [value, Date.now() + duration]);
    }

    return isExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this._isExpired(key)) return -1;
    const res = this._cache.get(key)?.[0] ?? -1;
    return res;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const xs = Array.from(this._cache).filter(([key]) => !this._isExpired(key));
    return xs.length;
};

TimeLimitedCache.prototype._isExpired = function(key) {
    return this._cache.has(key) &&
        (this._cache.get(key)?.[1] ?? Number.NEGATIVE_INFINITY) < Date.now();
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */