class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] === nums[1 + i]) return nums[i];
        }
        return -1;
    }
}
