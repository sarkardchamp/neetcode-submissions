class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map(),
            n = s.length;
        let ans = 0,
            l = 0,
            maxFreq = 0;
        for (let r = 0; r < n; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[r]));
            if (r - l + 1 - maxFreq <= k) {
                ans = Math.max(r - l + 1, ans);
            }
            while (r - l + 1 - maxFreq > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
        }
        return ans
    }
}
