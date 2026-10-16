class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const getKey = (str) => {
            return str.split('').sort().join();
        }
        const ansObj = {};

        for (const str of strs) {
            const key = getKey(str);
            if (!ansObj[key]) ansObj[key] = [];
            ansObj[key].push(str);
        }

        return Object.values(ansObj);
    }
}
