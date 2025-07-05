/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
     const map = new Map();

    for (let str of strs) {
        // Sort the string to get the anagram key
        const key = str.split('').sort().join('');
        
        // Group by the sorted key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Return all grouped anagrams
    return Array.from(map.values());

};