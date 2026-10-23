class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const ansSet = new Set(),
            n = nums.length;
        const dfs = (i, ss) => {
            if (i === n) {
                ansSet.add(ss.join(","));
                return;
            }
            ss.push(nums[i]);
            dfs(i + 1, ss);
            ss.pop();
            dfs(i + 1, ss);
        };
        dfs(0, []);
        return Array.from(ansSet).map((val) => val.split(",").filter(Boolean).map(Number));
    }
}
