class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let ans = 0;
        for (let i = 0; i < n; i++) {
            // odd length
            ans++;
            let l = i - 1, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                ans++;
                l--;
                r++;
            }
            // even length
            l = i, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                ans++;
                l--;
                r++;
            }
        }
        return ans;
    }
}
