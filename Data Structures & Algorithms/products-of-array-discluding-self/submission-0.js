class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [nums[0]], suffix = [], n = nums.length;
        suffix[n - 1] = nums[n - 1];
        for (let i = 1; i < n; i++) {
            prefix.push(prefix[i - 1] * nums[i]);
        }
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i];
        }
        const ans = [];
        for (let i = 0; i < n; i++) {
            let pdt = 1;
            if (i < n - 1) {
                pdt *= suffix[i + 1];
            }
            if (i > 0) {
                pdt *= prefix[i - 1];
            }
            ans.push(pdt);
        }
        return ans;
    }
}
