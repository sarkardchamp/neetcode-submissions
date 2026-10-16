class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currMin = prices[0], ans = 0;
        const n = prices.length;
        for (let i = 1; i < n; i++) {
            ans = Math.max(ans, prices[i] - currMin);
            currMin = Math.min(currMin, prices[i]);
        }
        return ans;
    }
}
