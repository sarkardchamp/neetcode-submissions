class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [], ans = [], n = nums.length;
        for (let i = 0; i < n; i++) {
            if (deque.length >0 && deque[0] < i - k + 1) {
                deque.shift();
            }
            const num = nums[i];
            while (nums[deque[deque.length - 1]] < num) {
                deque.pop();
            }
            deque.push(i);

            if (i >= k - 1) {
                ans.push(nums[deque[0]]);
            }
        }
        return ans;
    }
}
