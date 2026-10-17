class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = ~~((r + l) / 2);
            if (nums[m] === target) return m;
            if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }
        return -1;
    }
}
