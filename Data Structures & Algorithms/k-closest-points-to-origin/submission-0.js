class MinHeap {
    constructor(items = []) {
        this.heap = [];
        items.forEach((item) => this.enqueue(item));
    }

    parentIndex = (index) => Math.floor((index - 1) / 2);

    leftChildIndex = (index) => index * 2 + 1;

    rightChildIndex = (index) => index * 2 + 2;

    size = () => this.heap.length;

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    };

    enqueue = (item) => {
        this.heap.push(item);
        let index = this.size() - 1;
        while (index > 0) {
            const pIdx = this.parentIndex(index);
            if (this.heap[pIdx] < this.heap[index]) break;
            this.swap(pIdx, index);
            index = pIdx;
        }
    };

    dequeue = () => {
        if (!this.size()) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const res = this.heap[0];
        let index = 0;
        this.heap[0] = this.heap.pop();
        while (true) {
            const lIdx = this.leftChildIndex(index);
            const rIdx = this.rightChildIndex(index);
            let minIndex = index;
            if (lIdx < this.size() && this.heap[lIdx] < this.heap[minIndex]) {
                minIndex = lIdx;
            }
            if (rIdx < this.size() && this.heap[rIdx] < this.heap[minIndex]) {
                minIndex = rIdx;
            }
            if (minIndex === index) break;
            this.swap(index, minIndex);
            index = minIndex;
        }
        return res;
    };
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const distances = points.map(([x, y]) => Math.sqrt(x ** 2 + y ** 2)), n = points.length;
        const distancePointMap = new Map();
        for (let i = 0; i < n; i++) {
            if (!distancePointMap.has(distances[i])) {
                distancePointMap.set(distances[i], []);
            }
            distancePointMap.get(distances[i]).push(points[i]);
        }
        const minHeap = new MinHeap(distances);
        const ans = [];
        while (k) {
            const distance = minHeap.dequeue();
            const ps = distancePointMap.get(distance);
            while (ps.length && k > 0) {
                k--;
                ans.push(ps.pop());
            }
        }
        return ans;
    }
}
