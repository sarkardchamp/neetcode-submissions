class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        wordDict = new Set(wordDict);
        const dp = {};
        const dfs = (l, r) => {
            if (l === s.length) return true;
            if (r === s.length) return false;
            const key = `${l}-${r}`;
            if (dp[key] !== undefined) return dp[key];
            if (wordDict.has(s.slice(l, r + 1))) {
                const res = dfs(r + 1, r + 1);
                if (res) {
                    dp[key] = res;
                    return res;
                }
            }
            dp[key] = dfs(l, r + 1);
            return dp[key];
        }
        return dfs(0, 0);
    }
}
