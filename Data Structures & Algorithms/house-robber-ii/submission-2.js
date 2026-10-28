class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp0 = [nums[0]],
            dp1 = [0],
            n = nums.length;
        if (n === 1) return nums[0];
        if (n > 1) {
            dp0[1] = Math.max(nums[1], nums[0]);
            dp1[1] = nums[1];
        }
        for (let i = 2; i < n; i++) {
            if (i < n - 1) {
                dp0[i] = Math.max(dp0[i - 1], nums[i] + dp0[i - 2]);
            }
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
        }
        // console.log(dp0, dp1);
        return Math.max(dp0[n - 2], dp1[n - 1]);
    }
}
