class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const isRowValid = (r) => {
            const set = new Set();
            for (let i = 0; i < 9; i++) {
                const cellVal = board[r][i];
                if (cellVal !== "." && set.has(cellVal)) return false;
                set.add(cellVal);
            }
            return true;
        };

        const isColValid = (c) => {
            const set = new Set();
            for (let i = 0; i < 9; i++) {
                const cellVal = board[i][c];
                if (cellVal !== "." && set.has(cellVal)) return false;
                set.add(cellVal);
            }
            return true;
        };

        const isGridValid = (r, c) => {
            const set = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const cellVal = board[r + i][c + j];
                    if (cellVal !== "." && set.has(cellVal)) {
                        return false;
                    }
                    set.add(cellVal);
                }
            }
            return true;
        };
        for (let i = 0; i < 9; i++) {
            if (!isRowValid(i)) return false;
            if (!isColValid(i)) return false;
        }
        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                if (!isGridValid(r, c)) return false;
            }
        }
        return true;
    }
}
