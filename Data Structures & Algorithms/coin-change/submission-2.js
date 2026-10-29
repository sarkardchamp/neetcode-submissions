class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        coins.sort((a, b) => b - a);
        const n = coins.length,
            dp = [0];
        const dfs = (a) => {
            if (a === 0) return 0;
            let res = 1e9;
            if (dp[a] !== undefined) return dp[a];
            for (let c of coins) {
                if (c <= a) {
                    res = Math.min(res, 1 + dfs(a - c));
                }
            }
            dp[a] = res;
            return dp[a];
        };
        const ans = dfs(amount);

        if (ans === 1e9) return -1;
        return ans;
    }
}
