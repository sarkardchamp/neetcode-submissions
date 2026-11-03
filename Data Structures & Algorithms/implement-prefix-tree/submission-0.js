class PrefixTree {
    constructor() {
        this.tree = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.tree;
        for (const char of word) {
            if (!curr[char]) curr[char] = {};
            curr = curr[char];
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.tree;
        for (const char of word) {
            if (!curr || !curr[char]) return false;
            curr = curr[char];
        }
        return !!curr.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.tree;
        for (const char of prefix) {
            if (!curr || !curr[char]) return false;
            curr = curr[char];
        }
        return true;
    }
}
