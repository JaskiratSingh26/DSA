/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];

    for (let v of s) {
        if (v === '(') {
            arr.push(v);
        } else if (v === '{') {
            arr.push(v);
        } else if (v === '[') {
            arr.push(v);
        } else if (v === ')') {
            if (arr.length > 0 && arr[arr.length - 1] === '(') {
                arr.pop();
            } else {
                return false;
            }
        } else if (v === ']') {
            if (arr.length > 0 && arr[arr.length - 1] === '[') {
                arr.pop();
            } else {
                return false;
            }
        } else if (v === '}') {
            if (arr.length > 0 && arr[arr.length - 1] === '{') {
                arr.pop();
            } else {
                return false;
            }
        }
    }

if (arr.length === 0) return true; else return false
};