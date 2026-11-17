class Solution {

    binarySearch(nums, l, r, target) {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const num = nums[mid];
            if (num === target) return mid;
            if (num > target) r = mid - 1;
            else l = mid + 1;
        }
        return -1;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        if (nums[0] > nums[n - 1]) {
            let l = 0, r = n - 1;
            while (l < r) {
                const mid = Math.floor((l + r) / 2);
                const num = nums[mid];
                if (num < nums[r]) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            const ans = this.binarySearch(nums, 0, l - 1, target);
            if (ans !== -1) return ans;
            return this.binarySearch(nums, l, n - 1, target);
        }
        return this.binarySearch(nums, 0, n - 1, target);
    }
}
