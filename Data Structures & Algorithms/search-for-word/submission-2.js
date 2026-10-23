class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = word.length,
            rows = board.length,
            cols = board[0].length;
        const bfs = (i, r, c, visited) => {
            if (i === n) {
                return true;
            }
            if (
                r >= 0 &&
                r < rows &&
                c >= 0 &&
                c < cols &&
                !visited.has(`${r}-${c}`) &&
                board[r][c] === word[i]
            ) {
                visited.add(`${r}-${c}`);
                const res =
                    bfs(i + 1, r, c - 1, visited) ||
                    bfs(i + 1, r, c + 1, visited) ||
                    bfs(i + 1, r + 1, c, visited) ||
                    bfs(i + 1, r - 1, c, visited);

                visited.delete(`${r}-${c}`);
                return res;
            }
            return false;
        };
        let ans = false;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0]) {
                    ans ||= bfs(0, r, c, new Set());
                }
            }
        }
        return ans;
    }
}
