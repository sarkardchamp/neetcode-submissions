class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const ans = [];
        const helper = (o, c, str) => {
            if (o === 0 && c === 0) {
                ans.push(str);
                return;
            }
            if (o === 0) {
                helper(o, c - 1, str + ")");
                return;
            }
            if (o > 0) {
                helper(o - 1, c, str + "(");
            }
            if (o < c) {
                helper(o, c - 1, str + ")");
            }
        };
        helper(n, n, "");
        return ans;
    }
}
