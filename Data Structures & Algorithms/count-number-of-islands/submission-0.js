class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length, m = grid[0].length;
        let ans = 0;
        const dfs = (i, j) => {
            if (i >= 0 && 
            i < n && 
            j >= 0 && 
            j < m && 
            grid[i][j] === '1') {
                grid[i][j] = '0';
                dfs(i + 1, j);
                dfs(i - 1, j);
                dfs(i, j - 1);
                dfs(i, j + 1);
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === '1') {
                    ans += 1;
                    dfs(i, j);
                }
            }
        }
        return ans;
    }
}
