/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let data=[...args]
    return data.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */