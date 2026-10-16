class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const counter = Array.from({ length: 26 }).fill(0);
        for (const ch of s) {
            counter[ch.charCodeAt() - 97]++;
        }
        for (const ch of t) {
            if (!counter[ch.charCodeAt() - 97]) return false;
            counter[ch.charCodeAt() - 97]--;
        }
        return true;
    }
}
