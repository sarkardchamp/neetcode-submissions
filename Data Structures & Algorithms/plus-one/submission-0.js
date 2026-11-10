class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        digits.reverse();
        const n = digits.length;
        digits[0] += 1;
        let rem = 0;
        for (let i = 0; i < n; i++) {
            digits[i] += rem;
            rem = Math.floor(digits[i] / 10);
            digits[i] %= 10;
        }
        if (rem) {
            digits.push(rem);
        }
        digits.reverse();
        return digits;
    }
}
