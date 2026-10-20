class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const ans = [], n = nums.length;
        const helper = (i, ss) => {
            if (i === n) {
                ans.push(ss);
                return;
            }
            helper(i + 1, ss.concat(nums[i]));
            helper(i + 1, ss);
        }
        helper(0, []);
        return ans;
    }
}
