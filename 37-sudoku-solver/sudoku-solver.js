/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {


    helper(board, 0, 0)
   

};

function helper(board, row, col) {

    if (row == 9) return true

    let nextRow = row
    let nextcol = col + 1

    if (nextcol == 9) {
        nextRow++
        nextcol = 0
    }

    if (board[row][col] != '.') {
        return helper(board, nextRow, nextcol)

    }

    for (let i = 1; i <= 9; i++) {
        if (issafe(board, row, col, i)) {
            board[row][col] = i.toString()
           
            if( helper(board, nextRow, nextcol)) return true 
            board[row][col] = '.'

        }
    }

    return false

}



function issafe(board, row, col, digit) {

    //horitcoanl
    for (let j = 0; j < 9; j++) {
        if (board[row][j] == digit) {
            return false
        }
    }
    //vertical
    for (let j = 0; j < 9; j++) {
        if (board[j][col] == digit) {
            return false
        }
    }

    // rgird
   let sr = Math.floor(row / 3) * 3
let sc = Math.floor(col / 3) * 3

    for (let i = sr; i <= sr + 2; i++) {
        for (let j = sc; j <= sc + 2; j++) {
            if (board[i][j] == digit) return false
        }
    }
return true 

}