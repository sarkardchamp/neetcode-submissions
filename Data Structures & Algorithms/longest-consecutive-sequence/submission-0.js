class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let ans = 0;
        for (const num of nums) {
            let cnt = 1;
            if (!set.has(num - 1)) {
                let n = num;
                while (set.has(n + 1)) {
                    cnt++;
                    n++;
                }
                ans = Math.max(ans, cnt);
            }
        }
        return ans;
    }
}
