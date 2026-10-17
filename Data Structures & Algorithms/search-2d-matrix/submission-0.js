class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length,
            m = matrix[0].length;
        let r = 0,
            c = m - 1;
        while (r < n && c >= 0) {
            const val = matrix[r][c];
            if (val === target) return true;
            if (val < target) r++;
            else c--;
        }
        return false;
    }
}
