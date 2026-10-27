class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let secondLast = 1, last = 1;
        for (let i = 2; i <= n; i++) {
            [secondLast, last] = [last, last + secondLast]
        }
        return last;
    }
}
