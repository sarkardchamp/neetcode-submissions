class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const set = new Set();
        for (const num of nums) {
            if (set.has(num)) return num;
            set.add(num);
        }
        return -1;
    }
}
