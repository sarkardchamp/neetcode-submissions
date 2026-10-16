class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length, indices = new Map();

        for (let i = 0; i < n; i++) {
            const rem = target - nums[i];
            if (indices.has(rem)) return [indices.get(rem), i];
            indices.set(nums[i], i);
        }
        return [-1, -1];
    }
}
