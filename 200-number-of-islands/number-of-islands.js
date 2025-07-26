/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let count = 0
    let n = grid.length
    let m = grid[0].length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            if (grid[i][j] == '1') {
                dfs(grid, i, j, n, m)
                count++
            }
        }
    }
    return count
};

function dfs(grid, i, j, n, m) {
    if (i < 0 || i >=  n || j < 0 || j >= m || grid[i][j] == '0'  ) return
    grid[i][j] = '0'
    dfs(grid, i + 1, j, n, m)
    dfs(grid, i - 1, j, n, m)
    dfs(grid, i, j + 1, n, m)
    dfs(grid, i, j - 1, n, m)
}