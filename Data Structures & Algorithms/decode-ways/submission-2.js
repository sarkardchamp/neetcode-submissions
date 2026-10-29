class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length, dp = [];
        dp[n] = 1;
        const dfs = (i) => {
            if (i === n) return 1;
            if (s[i] === '0') return 0;
            if (dp[i] !== undefined) return dp[i];
            let ways = dfs(i + 1);
            if (i < n - 1 && ((s[i] === '1') || (s[i] === '2' && s[i + 1] < '7'))) {
                ways += dfs(i + 2);
            }
            dp[i] = ways;
            return dp[i];
        }
        return dfs(0);
    }
}
