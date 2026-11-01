class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const m = text1.length, n = text2.length;
        const dp = Array.from({ length: m }).map(() => Array.from({ length: n }).fill(0));

        for (let i = 0; i < m; i++) {
            if (text1[i] === text2[0]) dp[i][0] = 1;
            if (i > 0) {
                dp[i][0] = Math.max(dp[i][0], dp[i - 1][0]);
            }
        }

        for (let i = 0; i < n; i++) {
            if (text2[i] === text1[0]) dp[0][i] = 1;
            if (i > 0) {
                dp[0][i] = Math.max(dp[0][i], dp[0][i - 1]);
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (text1[i] === text2[j]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1]
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m - 1][n - 1];
    }
}
