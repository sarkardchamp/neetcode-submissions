class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();
        while (n !== 1) {
            set.add(n);
            let temp = n, sum = 0;
            while (temp) {
                const digit = temp % 10;
                sum += digit * digit;
                temp = ~~(temp / 10);
            }
            if (set.has(sum)) return false;
            n = sum;
        }

        return true;
    }
}
