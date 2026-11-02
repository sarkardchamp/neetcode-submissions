class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let res = 0;
        const n = grid.length,
            m = grid[0].length;

        const dp = Array.from({ length: n }).map(() => []);

        const dfs = (i, j) => {
            if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === 0) {
                return 0;
            }
            if (dp[i][j] !== undefined) return dp[i][j];
            grid[i][j] = 0;
            let s = 1;
            s += dfs(i, j + 1);
            s += dfs(i, j - 1);
            s += dfs(i + 1, j);
            s += dfs(i - 1, j);
            dp[i][j] = s;
            return s;
        };
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    res = Math.max(res, dfs(i, j));
                }
            }
        }
        return res;
    }
}
