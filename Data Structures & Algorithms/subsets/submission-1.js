class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const ans = [], n = nums.length;
        const helper = (i, ss) => {
            if (i === n) {
                ans.push([...ss]);
                return;
            }
            ss.push(nums[i]);
            helper(i + 1, ss);
            ss.pop();
            helper(i + 1, ss);
        }
        helper(0, []);
        return ans;
    }
}
