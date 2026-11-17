class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0,
            r = Math.max(...piles), ans;
        while (l <= r) {
            let timeTaken = 0;
            const mid = Math.floor((l + r) / 2);
            for (let pile of piles) {
                timeTaken += Math.ceil(pile / mid);
            }
            if (timeTaken > h) {
                l = mid + 1;
            } else {
                ans = mid;
                r = mid - 1;
            }
        }
        return ans;
    }
}
