class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1n = s1.length,
            s2n = s2.length;
        if (s1n > s2n) return false;
        const s1Cnt = Array.from({ length: 26 }).fill(0),
            s2Cnt = Array.from({ length: 26 }).fill(0);
        let l = 0;
        for (let i = 0; i < s1n; i++) {
            s1Cnt[s1[i].charCodeAt() - 97]++;
            s2Cnt[s2[i].charCodeAt() - 97]++;
        }
        for (let r = s1n; r < s2n; r++) {
            if (s1Cnt.every((cnt, i) => cnt === s2Cnt[i])) {
                return true;
            }
            s2Cnt[s2[r].charCodeAt() - 97]++;
            s2Cnt[s2[l++].charCodeAt() - 97]--;
        }
        return s1Cnt.every((cnt, i) => cnt === s2Cnt[i]);
    }
}
