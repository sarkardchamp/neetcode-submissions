class MyQueue {
    constructor() {
        this.q = [];
        this.start = 0;
        this.end = 0;
    }

    isEmpty() {
        return this.start === this.end;
    }

    enqueue(item) {
        this.q.push(item);
        this.end++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const val = this.q[this.start++];
        return val;
    }

    size() {
        return this.end - this.start;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const q = new MyQueue(),
            rows = grid.length,
            cols = grid[0].length;
        const visit = Array.from({ length: rows }).map(() => []);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    q.enqueue([r, c]);
                }
            }
        }
        let dist = 0;
        while (!q.isEmpty()) {
            const s = q.size();
            for (let i = 0; i < s; i++) {
                const [r, c] = q.dequeue();
                if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === -1 || visit[r][c]) {
                    continue;
                }
                visit[r][c] = true;
                grid[r][c] = dist;
                q.enqueue([r, c + 1]);
                q.enqueue([r, c - 1]);
                q.enqueue([r + 1, c]);
                q.enqueue([r - 1, c]);
            }
            dist++;
        }
    }
}
