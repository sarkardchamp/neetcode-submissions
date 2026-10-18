class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        let l = 0,
            r = arr.length - 1,
            ans = "";
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const [t, val] = arr[m];
            if (t === timestamp) return val;
            if (t > timestamp) {
                r = m - 1;
            } else {
                ans = val;
                l = m + 1;
            }
        }
        return ans;
    }
}
