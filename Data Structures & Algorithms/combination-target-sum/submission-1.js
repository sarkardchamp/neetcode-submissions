class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = [];
        const dfs = (i, t, arr) => {
            if (t === 0) {
                ans.push([...arr]);
                return;
            }
            if (i < nums.length) {
                if (nums[i] <= t) {
                    arr.push(nums[i]);
                    dfs(i, t - nums[i], arr);
                    arr.pop();
                }
                dfs(i + 1, t, arr);
            }
        };
        dfs(0, target, []);
        return ans;
    }
}
