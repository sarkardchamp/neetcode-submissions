class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        let ans = s[0];
        for (let i = 0; i < n; i++) {
            // odd length
            let l = i - 1, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > ans.length) {
                    ans = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
            // even length
            l = i, r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > ans.length) {
                    ans = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }
        return ans;
    }
}
