/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {


    let n = temperatures.length

    let ans = new Array(n).fill(0)

    let stack = []

    for (let i = 0; i < n; i++) {

        while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
            let [prevIndex, prevTemp] = stack.pop();
            ans[prevIndex] = i - prevIndex;
        }



        stack.push([i, temperatures[i]])

    }
    return ans


};