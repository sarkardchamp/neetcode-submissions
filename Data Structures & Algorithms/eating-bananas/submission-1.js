class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles);
        let ans = r;
        const n = piles.length;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            let time = 0;
            for (let i = 0; i < n; i++) {
                time += Math.ceil(piles[i] / mid);
            }

            if (time <= h) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
}
