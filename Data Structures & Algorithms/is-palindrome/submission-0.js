class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0,
            r = s.length - 1;
        const isAlphaNumeric = (ch) => {
            const chCode = ch.charCodeAt();
            if (chCode <= "9".charCodeAt() && chCode >= "0".charCodeAt()) return true;
            if (chCode >= "A".charCodeAt() && chCode <= "Z".charCodeAt()) return true;
            if (chCode >= "a".charCodeAt() && chCode <= "z".charCodeAt()) return true;
            return false;
        };
        while (l < r) {
            if (!isAlphaNumeric(s[l])) {
                l++;
                continue;
            }
            if (!isAlphaNumeric(s[r])) {
                r--;
                continue;
            }
            console.log(s[l], s[r]);
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }
}
