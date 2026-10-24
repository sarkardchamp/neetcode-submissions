class MinHeap {
    constructor(items = []) {
        this.heap = [];
        items.forEach((item) => this.enqueue(item));
    }

    parentIndex = (index) => Math.floor((index - 1) / 2);

    leftChildIndex = (index) => 2 * index + 1;

    rightChildIndex = (index) => 2 * index + 2;

    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    };

    size = () => this.heap.length;

    enqueue = (item) => {
        this.heap.push(item);
        let index = this.heap.length - 1;
        while (index > 0) {
            const pIdx = this.parentIndex(index);
            if (this.heap[pIdx] < this.heap[index]) {
                break;
            }
            this.swap(pIdx, index);
            index = pIdx;
        }
    };

    dequeue = () => {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            const leftIdx = this.leftChildIndex(index);
            const rightIdx = this.rightChildIndex(index);
            let smallestIdx = index;

            if (leftIdx < this.size() && this.heap[leftIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftIdx;
            }
            if (rightIdx < this.size() && this.heap[rightIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightIdx;
            }
            if (smallestIdx === index) {
                break;
            }
            this.swap(index, smallestIdx);
            index = smallestIdx;
        }
        return min;
    };
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = new MinHeap(nums);
        this.k = k;
        while (this.arr.size() > k) {
            this.arr.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.enqueue(val);
        if (this.arr.size() > this.k) {
            this.arr.dequeue();
        }
        return this.arr.heap[0];
    }
}
