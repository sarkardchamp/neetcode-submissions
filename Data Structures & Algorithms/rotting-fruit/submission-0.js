class MyQueue {
    constructor() {
        this.q = [];
        this.start = 0;
        this.end = 0;
    }

    empty() {
        return this.start === this.end;
    }

    size() {
        return this.end - this.start;
    }

    push(item) {
        this.q.push(item);
        this.end++;
    }

    pop() {
        if (this.empty()) return null;
        const val = this.q[this.start++];
        return val;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new MyQueue(),
            rows = grid.length,
            cols = grid[0].length;
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let fresh = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    fresh++;
                }
                if (grid[i][j] === 2) {
                    q.push([i, j]);
                }
            }
        }
        let ans = 0;
        while (!q.empty() && fresh > 0) {
            const s = q.size();
            for (let i = 0; i < s; i++) {
                const [r, c] = q.pop();
                for (const [dr, dc] of dirs) {
                    const row = r + dr, col = c + dc;
                    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 1) continue;
                    grid[row][col] = 2;
                    fresh--;
                    q.push([row, col]);
                }

            }
            ans++;
        }
        return fresh ? -1 : ans;
    }
}
