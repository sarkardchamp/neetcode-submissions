class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = [0], suffix = [], n = height.length;
        suffix[n - 1] = 0;
        for (let i = 1; i < n; i++) {
            prefix[i] = Math.max(prefix[i - 1], height[i - 1]);
        }
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i + 1], height[i + 1]);
        }
        console.log(prefix);
        console.log(suffix);
        let ans = 0;
        for (let i = 0; i < n; i++) {
            ans += Math.max(0, Math.min(prefix[i], suffix[i]) - height[i]);
        }
        return ans;
    }
}
