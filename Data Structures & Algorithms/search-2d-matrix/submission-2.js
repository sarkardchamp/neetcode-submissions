class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix[0].length, n = matrix.length;
        let t = 0, b = n - 1;

        while (t >= 0 && b < n && t <= b) {
            const r = Math.floor((t + b) / 2);
            console.log(r, t, b);
            if (target < matrix[r][0]) {
                b = r - 1;
            } else if (target > matrix[r][m - 1]) {
                t = r + 1;
            } else {
                t = b = r;
                break;
            }
        }
        if (t > b) return false;
        let l = 0, r = m - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = matrix[t][mid];
            if (val === target) return true;
            if (val < target) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
}
