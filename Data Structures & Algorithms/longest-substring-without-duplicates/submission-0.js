class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map(), n = s.length;
        let ans = 0, l = 0;
        for (let r = 0; r < n; r++) {
            const ch = s[r];
            if (!map.has(ch) || map.get(ch) < l) {
                ans = Math.max(ans, r - l + 1);
            } else {
                l = map.get(ch) + 1;
            }
            map.set(ch, r);
        }
        return ans;
    }
}
