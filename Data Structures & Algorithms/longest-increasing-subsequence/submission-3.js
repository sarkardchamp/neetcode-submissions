class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = {};
        const dfs = (i) => {
            if (dp[i] !== undefined) return dp[i];
            let res = 1;
            for (let j = i + 1; j < n; j++) {
                if (nums[j] > nums[i]) {
                    res = Math.max(res, 1 + dfs(j));
                }
            }
            dp[i] = res;
            return res;
        };
        return Math.max(...nums.map((_, i) => dfs(i)));
    }
}
