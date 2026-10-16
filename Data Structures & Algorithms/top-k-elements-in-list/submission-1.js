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
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        map.forEach((val, key) => {
            freq[val].push(key);
        });
        const ans = [];
        for (let i = nums.length; i > 0; i--) {
            for (const n of freq[i]) {
                ans.push(n);
                if (ans.length === k) return ans;
            }
        }
        return ans;
    }
}
