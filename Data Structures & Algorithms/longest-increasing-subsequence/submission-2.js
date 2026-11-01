class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = {};
        const dfs = (i, m) => {
            if (i === n) return 0;
            const key = `${i}-${m}`
            if (dp[key] !== undefined) return dp[key];
            const res = dfs(i + 1, m);
            if (nums[i] > m) {
                dp[key] = Math.max(res, 1 + dfs(i + 1, nums[i]));
                return dp[key];
            }
            dp[key] = res;
            return res;
        };
        return dfs(0, -Infinity);
    }
}
