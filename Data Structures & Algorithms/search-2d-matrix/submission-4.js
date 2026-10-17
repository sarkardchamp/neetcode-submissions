class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length, m = matrix[0].length;
        let l = 0, r = m * n - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const ir = Math.floor(mid / m);
            const ic = mid % m;
            const val = matrix[ir][ic];
            if (val === target) return true;
            if (val < target) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
}
