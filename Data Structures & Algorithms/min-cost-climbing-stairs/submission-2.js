class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length, dp = [];
        const dfs = (i) => {
            if (i >= n) return 0;
            if (dp[i] !== undefined) return dp[i];
            dp[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            return dp[i];
        }
        return Math.min(dfs(0), dfs(1));
    }
}
