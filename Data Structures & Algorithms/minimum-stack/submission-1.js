class MinStack {
    constructor() {
        this.st = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currMin = this.st.length ? Math.min(this.st[this.st.length - 2], val) : val;
        this.st.push(currMin, val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.st.pop();
        this.st.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.st[this.st.length - 2];
    }
}
