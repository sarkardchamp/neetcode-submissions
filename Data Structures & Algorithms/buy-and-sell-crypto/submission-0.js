class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currMax = 0, ans = 0;
        const n = prices.length;
        for (let i = n - 1; i >= 0; i--) {
            ans = Math.max(ans, currMax - prices[i]);
            currMax = Math.max(currMax, prices[i]);
        }
        return ans;
    }
}
