class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array.from({ length: coins.length + 1 });
        const dfs = (a) => {
            if (a === 0) return 0;
            if (dp[a] !== undefined) return dp[a];
            let ans = Infinity;
            for (const coin of coins) {
                if (coin <= a) {
                    ans = Math.min(ans, 1 + dfs(a - coin));
                }
            }
            dp[a] = ans;
            return ans;
        }
        const ans = dfs(amount);
        if (ans === Infinity) return -1;
        return ans;
    }
}
