/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let ans = 0
    let maxvowels = 0
    let i = 0
    for (i = 0; i < k; i++) {
        if (s[i] == 'a' || s[i] == 'i' || s[i] == 'o' || s[i] == 'e' || s[i] == 'u') {
            ans++
        }
    }

    let j = k
    i=0
    maxvowels = Math.max(ans, maxvowels)

    while (j < s.length) {

        if (s[j] == 'a' || s[j] == 'i' || s[j] == 'o' || s[j] == 'e' || s[j] == 'u') {
            ans++
        }

       if (s[i] == 'a' || s[i] == 'i' || s[i] == 'o' || s[i] == 'e' || s[i] == 'u') {
            ans--
        }


        j++
        i++
        maxvowels = Math.max(ans, maxvowels)

    }

    // while (j < s.length) {
    //     // If the new character entering the window is a vowel, increment ans
    //     if (s[j] == 'a' || s[j] == 'i' || s[j] == 'o' || s[j] == 'e' || s[j] == 'u') {
    //         ans++;
    //     }

    //     // If the character leaving the window was a vowel, decrement ans
    //     if (s[j - k] == 'a' || s[j - k] == 'i' || s[j - k] == 'o' || s[j - k] == 'e' || s[j - k] == 'u') {
    //         ans--;
    //     }

    //     j++;
    //     maxvowels = Math.max(ans, maxvowels);
    // }
    return maxvowels
};