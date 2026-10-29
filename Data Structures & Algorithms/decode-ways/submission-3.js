class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length,
            dp = [];
        dp[n] = 1;
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp[i] = 0;
            } else {
                dp[i] = dp[i + 1];
                if (i + 1 < n && Number(s.slice(i, i + 2) <= 26)) {
                    dp[i] += dp[i + 2];
                }
            }
        }
        return dp[0];
    }
}
