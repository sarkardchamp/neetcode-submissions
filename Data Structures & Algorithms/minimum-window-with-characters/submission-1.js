class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const sCnt = new Map(),
            tCnt = new Map();
        const ns = s.length,
            nt = t.length;
        if (nt > ns) return "";
        for (let i = 0; i < nt; i++) {
            tCnt.set(t[i], (tCnt.get(t[i]) || 0) + 1);
        }
        const tArr = Array.from(tCnt.entries());
        let l = 0,
            ans = "";
        for (let r = 0; r < ns; r++) {
            sCnt.set(s[r], (sCnt.get(s[r]) || 0) + 1);
            while (tArr.every(([ch, cnt]) => sCnt.get(ch) >= cnt)) {
                if (!ans) ans = s.slice(l, r + 1);
                if (ans.length > r - l + 1) {
                    ans = s.slice(l, r + 1);
                }
                sCnt.set(s[l], sCnt.get(s[l]) - 1);
                l++;
            }
        }
        return ans;
    }
}
