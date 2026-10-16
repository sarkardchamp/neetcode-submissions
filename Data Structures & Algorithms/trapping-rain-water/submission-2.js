class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = [0],
            suffix = [],
            n = height.length;
        suffix[n - 1] = 0;
        for (let i = 1; i < n; i++) {
            prefix[i] = Math.max(prefix[i - 1], height[i - 1]);
        }
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i + 1], height[i + 1]);
        }
        let ans = 0;
        for (let i = 0; i < n; i++) {
            const wall = Math.min(prefix[i], suffix[i]);
            if (wall > height[i]) {
                ans += Math.max(0, wall - height[i]);
            }
        }
        return ans;
    }
}
