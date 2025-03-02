/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
        
    
   var isAnagram = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();

    if (s.length !== t.length) return false;
    if (s.length <= 1 && s.length > (5 * 10 ** 4)) return false; // This check doesn't make logical sense, but I'll leave it as you provided it.

    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1);
        } else {
            map1.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) { // Corrected line
        if (map2.has(t[i])) {
            map2.set(t[i], map2.get(t[i]) + 1);
        } else {
            map2.set(t[i], 1);
        }
    }

    for (let [key, value] of map1) {
        if (map2.has(key)) {
            if (value !== map2.get(key)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};