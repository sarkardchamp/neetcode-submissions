class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const st = [];
        for (const ch of s) {
            if ("({[".includes(ch)) {
                st.push(ch);
            } else {
                if (!st.length) return false;
                const top = st.pop();
                if (
                    (ch === ")" && top !== "(") ||
                    (ch === "}" && top !== "{") ||
                    (ch === "]" && top !== "[")
                )
                    return false;
            }
        }
        return st.length === 0;
    }
}
