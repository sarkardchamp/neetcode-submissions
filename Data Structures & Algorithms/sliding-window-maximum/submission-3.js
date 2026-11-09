class MaxHeap {
    constructor(items = [], comparator) {
        this.heap = [];
        this.comparator = comparator;
        items.forEach((item) => this.enqueue(item));
    }
    parentIndex = (index) => Math.floor((index - 1) / 2);
    leftChildIndex = (index) => index * 2 + 1;
    rightChildIndex = (index) => index * 2 + 2;
    swap = (i, j) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    };
    front = () => this.heap[0];
    size = () => this.heap.length;
    enqueue = (item) => {
        this.heap.push(item);
        let index = this.heap.length - 1;
        while (index > 0) {
            const pIdx = this.parentIndex(index);
            if (this.comparator(this.heap[pIdx], this.heap[index])) break;
            this.swap(index, pIdx);
            index = pIdx;
        }
    };
    dequeue = () => {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();
        const res = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while (true) {
            const lIdx = this.leftChildIndex(index);
            const rIdx = this.rightChildIndex(index);
            let maxIndex = index;
            if (lIdx < this.size() && this.comparator(this.heap[lIdx], this.heap[maxIndex])) {
                maxIndex = lIdx;
            }
            if (rIdx < this.size() && this.comparator(this.heap[rIdx], this.heap[maxIndex])) {
                maxIndex = rIdx;
            }
            if (maxIndex === index) break;
            this.swap(maxIndex, index);
            index = maxIndex;
        }
        return res;
    };
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const q = new MaxHeap([], (a, b) => a[0] > b[0]),
            ans = [];
        for (let i = 0; i < k - 1; i++) {
            q.enqueue([nums[i], i]);
        }

        for (let i = k - 1; i < nums.length; i++) {
            while (q.size() && q.heap[0][1] < i - k) {
                q.dequeue();
            }
            q.enqueue([nums[i], i]);
            const [val, idx] = q.dequeue();
            ans.push(val);
            if (idx > i - k + 1) {
                q.enqueue([val, idx]);
            }
        }
        return ans;
    }
}
