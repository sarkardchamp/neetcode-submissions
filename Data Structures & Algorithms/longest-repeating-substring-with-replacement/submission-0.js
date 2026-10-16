class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const chars = new Set(s),
            n = s.length;
        let ans = 0;

        for (const ch of chars) {
            let l = 0,
                cnt = 0;
            for (let r = 0; r < n; r++) {
                if (s[r] !== ch) {
                    cnt++;
                }
                if (cnt <= k) {
                    ans = Math.max(ans, r - l + 1);
                }
                while (cnt > k) {
                    if (s[l] !== ch) {
                        cnt--;
                    }
                    l++;
                }
            }
        }
        return ans;
    }
}
