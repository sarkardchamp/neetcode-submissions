class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lengths = [];
        const encodedArray = [];
        for (const str of strs) {
            lengths.push(`${str.length}`);
        }
        encodedArray.push(lengths.join(','),'$#');
        for(const str of strs) {
            encodedArray.push(str);
        }
        return encodedArray.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const [lengthStr, strs] = str.split('$#');
        if (!lengthStr) return [];
        const lengths = lengthStr.split(',').map(Number);
        const ans = [], n = lengths.length;
        let l = 0, i = 0;
        while (i < n) {
            ans.push(strs.slice(l, l + lengths[i]));
            l += lengths[i++];
        }
        return ans;
    }
}
