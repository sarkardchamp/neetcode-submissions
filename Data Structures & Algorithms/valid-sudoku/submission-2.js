class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map(),
            cols = new Map(),
            squares = new Map();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cellVal = board[i][j];
                const r = Math.floor(i / 3);
                const c = Math.floor(j / 3);
                const squareKey = `${r},${c}`;
                if (
                    cellVal !== "." &&
                    (rows.get(i)?.has(cellVal) ||
                        cols.get(j)?.has(cellVal) ||
                        squares.get(squareKey)?.has(cellVal))
                ) {
                    return false;
                }
                if (!rows.has(i)) rows.set(i, new Set());
                if (!cols.has(j)) cols.set(j, new Set());
                if (!squares.has(squareKey)) {
                    squares.set(squareKey, new Set());
                }
                rows.get(i).add(cellVal);
                cols.get(j).add(cellVal);
                squares.get(squareKey).add(cellVal);
            }
        }
        return true;
    }
}
