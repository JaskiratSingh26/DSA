/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let ans = []
    let count = 0
    let char = chars[0]

    for (let i = 0; i < chars.length; i++) {

        if (char == chars[i]) {
            count++
        }
        else {
            if (count == 1) {
                ans.push(char)
                char = chars[i]
                count = 1
            }
            else {
                ans.push(char)
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    ans.push(countStr[j]);
                }
                char = chars[i]
                count = 1

            }
        }


    }

    if (count == 1) {

        ans.push(char)
    }
    else {
        ans.push(char)
        const countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
            ans.push(countStr[j]);
        }
    }

    // Modify the original 'chars' array in-place
    for (let i = 0; i < ans.length; i++) {
        chars[i] = ans[i];
    }
    chars.length = ans.length; // Truncate the original array

    let length = ans.length;
    return length;
 
};