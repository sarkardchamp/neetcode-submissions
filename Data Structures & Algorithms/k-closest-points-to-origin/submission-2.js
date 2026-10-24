class MinHeap {
    constructor(items = [], getVal = (item) => item) {
        this.heap = [];
        this.getVal = getVal;
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
            if (this.getVal(this.heap[pIdx]) < this.getVal(this.heap[index])) break;
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
            if (lIdx < this.size() && this.getVal(this.heap[lIdx]) < this.getVal(this.heap[minIndex])) {
                minIndex = lIdx;
            }
            if (rIdx < this.size() && this.getVal(this.heap[rIdx]) < this.getVal(this.heap[minIndex])) {
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
        const minHeap = new MinHeap(points, ([x, y]) => Math.sqrt(x ** 2 + y ** 2));
        const ans = [];
        while (k) {
                k--;
                ans.push(minHeap.dequeue());
        }
        return ans;
    }
}
