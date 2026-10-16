class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] === nums[i + 1]) return true;
        }
        return false;
    }
}
