class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = {};
        const dfs = (i, j) => {
            if (i === n) return 0;
            const key = `${i}-${j}`
            if (dp[key] !== undefined) return dp[key];
            const res = dfs(i + 1, j);
            if (j === -1 || nums[i] > nums[j]) {
                dp[key] = Math.max(res, 1 + dfs(i + 1, i));
                return dp[key];
            }
            dp[key] = res;
            return res;
        };
        return dfs(0, -1);
    }
}
