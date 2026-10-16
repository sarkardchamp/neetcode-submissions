class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let ans = 0;
        for (const num of nums) {
            if (!set.has(num - 1)) {
                let cnt = 1;
                while (set.has(num + cnt)) {
                    cnt++;
                }
                ans = Math.max(ans, cnt);
            }
        }
        return ans;
    }
}
