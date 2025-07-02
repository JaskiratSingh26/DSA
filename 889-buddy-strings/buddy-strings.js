/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false

    if (s == goal) {
        let seen = new Set();
        for (let char of s) {
            if (seen.has(char)) return true; // found a duplicate
            seen.add(char);
        }
        return false

    }


    let index = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) index.push(i)
    }

    if (index.length == 2) {


        let sarr = s.split('')
        let temp = sarr[index[1]]
        sarr[index[1]] = sarr[index[0]]
        sarr[index[0]] = temp


        if (sarr.join('') == goal) return true
        return false



    }

    return false


};

