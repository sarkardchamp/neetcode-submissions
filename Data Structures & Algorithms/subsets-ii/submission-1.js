class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const ans = [],n = nums.length;
        const dfs = (i, ss) => {
            if (i === n) {
                ans.push([...ss]);
                return;
            }
            ss.push(nums[i]);
            dfs(i + 1, ss);
            ss.pop();
            while (i + 1 < n && nums[i + 1] === nums[i]) {
                i++;
            }
            dfs(i + 1, ss);
        };
        dfs(0, []);
        return ans;
    }
}
