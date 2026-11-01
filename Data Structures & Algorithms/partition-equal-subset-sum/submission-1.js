class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, curr) => acc + curr),
            n = nums.length, dp = {};
        const dfs = (i, s) => {
            if (s === 0) return true;
            if (i === n) return false;
            const key = `${i}-${s}`;
            if (dp[key] !== undefined) return dp[key];
            let res = dfs(i + 1, s);
            if (nums[i] <= s) {
                dp[key] = res || dfs(i + 1, s - nums[i]);
                return dp[key];
            }
            dp[key] = res;
            return res;
        };
        if (sum % 2) return false;
        return dfs(0, sum / 2);
    }
}
