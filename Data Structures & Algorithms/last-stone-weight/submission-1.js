class MaxHeap {
    constructor (items = []) {
        this.heap = [];
        items.forEach(item => this.enqueue(item));
    }

    parentIndex = (index) => Math.floor((index - 1) / 2);

    leftChildIndex = (index) => index * 2 + 1;

    rightChildIndex = (index) => index * 2 + 2;

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size = () => this.heap.length;

    enqueue = (item) => {
        this.heap.push(item);
        let index = this.heap.length - 1;
        while (index > 0) {
            const pIdx = this.parentIndex(index);

            if (this.heap[pIdx] > this.heap[index]) break;
            this.swap(index, pIdx);
            index = pIdx;
        }
    }

    dequeue = () => {
        if (!this.size()) return undefined;
        if (this.size() === 1) return this.heap.pop();
        const res = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
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

            if (maxIndex === index) break;
            this.swap(maxIndex, index);
            index = maxIndex;
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const stoneHeap = new MaxHeap(stones);
        while (stoneHeap.size() > 1) {
            const biggerStone = stoneHeap.dequeue();
            const smallerStone = stoneHeap.dequeue();

            const newStone = biggerStone - smallerStone;

            if (newStone) {
                stoneHeap.enqueue(newStone);
            }
        }
        if (stoneHeap.size()) return stoneHeap.dequeue();
        return 0;
    }
}
