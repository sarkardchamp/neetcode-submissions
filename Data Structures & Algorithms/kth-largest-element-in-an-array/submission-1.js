class MaxHeap {
    constructor(items = []) {
        this.heap = [];
        items.forEach((item) => this.enqueue(item));
    }

    size = () => this.heap.length;

    parentIndex = (index) => Math.floor((index - 1) / 2);

    leftChildIndex = (index) => index * 2 + 1;

    rightChildIndex = (index) => index * 2 + 2;

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    };

    enqueue = (item) => {
        this.heap.push(item);
        let index = this.size() - 1;
        while (index > 0) {
            const pIdx = this.parentIndex(index);
            if (this.heap[pIdx] > this.heap[index]) break;
            this.swap(pIdx, index);
            index = pIdx;
        }
    };

    dequeue = () => {
        if (!this.size()) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const maxVal = this.heap[0];
        let index = 0;
        this.heap[0] = this.heap.pop();
        while (true) {
            const lIdx = this.leftChildIndex(index);
            const rIdx = this.rightChildIndex(index);
            let maxIndex = index;

            if (lIdx < this.size() && this.heap[lIdx] > this.heap[maxIndex]) {
                maxIndex = lIdx;
            }
            if (rIdx < this.size() && this.heap[rIdx] > this.heap[maxIndex]) {
                maxIndex = rIdx;
            }
            if (index === maxIndex) break;
            this.swap(index, maxIndex);
            index = maxIndex;
        }
        return maxVal;
    };
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxHeap(nums);
        while (k > 1) {
            maxHeap.dequeue();
            k--;
        }
        return maxHeap.dequeue();
    }
}
