class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        return [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([num]) => num)
            .slice(0, k);
    }
}
