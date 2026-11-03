class WordDictionary {
    constructor() {
        this.tree = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.tree;
        for (const ch of word) {
            if (!curr[ch]) curr[ch] = {};
            curr = curr[ch];
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const helper = (tree, chars) => {
            let curr = tree;
            const n = chars.length;
            for (let i = 0; i < n; i++) {
                const ch = chars[i];
                if (ch !== ".") {
                    if (!curr[ch]) {
                        return false;
                    } else {
                        curr = curr[ch];
                    }
                } else {
                    if (!curr) return false;
                    let hasWord = false;
                    for (const key in curr) {
                        if (key !== "end") {
                            hasWord ||= helper(curr[key], chars.slice(i + 1));
                        }
                    }
                    return hasWord;
                }
            }
            return !!curr.end;
        };
        return helper(this.tree, word);
    }
}
