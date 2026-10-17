class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1, ans = nums[0];
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                ans = Math.min(ans, nums[l]);
                break;
            }
            const m = Math.floor((l + r) / 2);
            ans = Math.min(ans, nums[m]);
            if (nums[m] >= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return ans;
    }
}
