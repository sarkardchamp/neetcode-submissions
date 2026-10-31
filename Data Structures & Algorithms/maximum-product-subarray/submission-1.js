class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let ans = nums[0], prefix = 1, suffix = 1;
        for (let i = 0; i < n; i++) {
            prefix = nums[i] * (prefix || 1);
            suffix = nums[n - 1 - i] * (suffix || 1);
            ans = Math.max(ans, prefix, suffix);
        }
        return ans === -0 ? 0 : ans;
    }
}
