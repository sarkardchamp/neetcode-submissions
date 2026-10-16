class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length,
            st = [];
        const ans = Array.from({ length: n }).fill(0);
        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];
            while (!!st.length && st[st.length - 1][0] < temp) {
                const [, index] = st.pop();
                ans[index] = i - index;
            }
            st.push([temp, i]);
        }
        return ans;
    }
}
