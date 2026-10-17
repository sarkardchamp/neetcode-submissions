class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const findPivot = () => {
            let l = 0, r = nums.length - 1;
            while (l < r) {
                const m = Math.floor((l + r) / 2);
                if (nums[m] > nums[r]) {
                    l = m + 1;
                } else {
                    r = m;
                }
            }
            return l;
        };

        const bSearch = (l, r) => {
            while (l <= r) {
                const m = Math.floor((l + r) / 2);
                if (nums[m] === target) return m;
                if (nums[m] < target) l = m + 1;
                else r = m - 1;
            }
            return -1;
        }

        const pivot = findPivot();

        const leftHalf = bSearch(0, pivot - 1);
        if (leftHalf !== -1) return leftHalf;

        return bSearch(pivot, nums.length - 1);

    }
}
