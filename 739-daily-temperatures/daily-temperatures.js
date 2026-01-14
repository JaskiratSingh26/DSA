/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length

    let ans = new Array(n).fill(0)

    let stack = []

    for (let i = 0; i < n; i++) {

        while (temperatures[stack[stack.length-1]] < temperatures[i] && stack.length > 0) {
            let top = stack.pop()
            ans[top]=i-top




        }


        stack.push(i)




    }


    return ans
};