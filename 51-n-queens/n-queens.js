/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    let ans = []
    let board = new Array(n).fill('.').map(() => new Array(n).fill('.'))

    helper(board, 0, n, ans)
    return ans

};

function helper(board, row, n, ans) {
    if (row == n) {
        ans.push(board.map((el)=> el.join('') ))
        return
    }

    for (let j = 0; j < n; j++) {
        if (safe(board, row, j, n)) {
            board[row][j] = 'Q'
            helper(board, row + 1, n, ans)
            board[row][j] = '.'

        }
    }
}

function safe(board, row, col, n) {
    for (let i = 0; i < n; i++) {
        if (board[row][i] == 'Q') {
            return false
        }
    }
    for (let i = 0; i < n; i++) {
        if (board[i][col] == 'Q') {
            return false
        }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--){
        if(board[i][j]=='Q'){
            return false 
        }
    }
    for (let i = row, j = col; i >= 0 && j < n; i--, j++){
        if(board[i][j]=='Q'){
            return false 
        }
    }
    return true 
}