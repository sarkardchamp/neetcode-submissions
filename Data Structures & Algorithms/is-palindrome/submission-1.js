class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;
        const isAlphaNumeric = (ch) => {
            if (ch.charCodeAt() <= '9'.charCodeAt() && ch >= '0') return true;
            if (ch >= 'A' && ch <= 'Z') return true;
            if (ch >= 'a' && ch <= 'z') return true;
            return false;
        }
        while (l < r) {
            if (!isAlphaNumeric(s[l])) {
                l++;
                continue;
            }
            if (!isAlphaNumeric(s[r])) {
                r--;
                continue;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }
}
