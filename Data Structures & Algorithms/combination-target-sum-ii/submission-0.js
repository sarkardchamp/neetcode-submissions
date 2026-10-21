class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const ans = [], n = candidates.length;
        const helper = (i, sum, arr) => {
            if (sum === target) {
                ans.push([...arr]);
                return;
            }
            if (i < n && sum < target) {
                arr.push(candidates[i]);
                helper(i + 1, sum + candidates[i], arr);
                arr.pop();
                while (i + 1 < n && candidates[i] === candidates[i + 1]) {
                    i++;
                }
                helper(i + 1, sum, arr);
            }
        };
        helper(0, 0, []);
        return ans;
    }
}
