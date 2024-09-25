/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }
    if (typeof fn !== 'function') {
      throw new Error('Sorting function is not a function');
    }
  
    return [...arr].sort((a, b) => {
      const aValue = fn(a);
      const bValue = fn(b);
  
      if (typeof aValue !== 'number' || typeof bValue !== 'number') {
        throw new Error('Sorting function must return a number');
      }
  
      return aValue - bValue;
    });
  };