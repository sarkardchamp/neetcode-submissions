class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0,
            l = 0,
            r = heights.length - 1;
        while (l < r) {
            const minH = Math.min(heights[l], heights[r]);
            ans = Math.max(ans, minH * (r - l));
            if (heights[l] < heights[r]) l++;
            else r--;
        }

        return ans;
    }
}
