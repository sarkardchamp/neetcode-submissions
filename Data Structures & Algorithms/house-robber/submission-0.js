class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = [], n = nums.length;
        dp[0] = nums[0];
        if (n > 1) {
            dp[1] = Math.max(nums[1], nums[0]);
        }
        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[n - 1];
    }
}
