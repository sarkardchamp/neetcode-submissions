class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        const n = nums.length;
        const helper = (i, sum, arr) => {
            if (sum === target) {
                ans.push([...arr]);
                return;
            }
            if (i < n && sum < target) {
                arr.push(nums[i]);
                helper(i, sum + nums[i], arr);
                arr.pop();
                helper(i + 1, sum, arr);
            }
        }
        helper(0, 0, []);
        return ans;
    }
}
