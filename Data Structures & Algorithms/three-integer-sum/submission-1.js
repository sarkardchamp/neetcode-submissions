class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length,
            ans = [];
        for (let i = 0; i < n - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1,
                r = n - 1;
            while (l < r) {
                const sum = nums[l] + nums[r] + nums[i];
                if (sum > 0) r--;
                else if (sum < 0) l++;
                else {
                    ans.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && (nums[l] === nums[l - 1] || nums[r] === nums[r + 1])) {
                        if (nums[l] === nums[l - 1]) l++;
                        if (nums[r] === nums[r + 1]) r--;
                    }
                }
            }
        }
        return ans;
    }
}
