class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cpws = position.map((p, i) => [p, speed[i]]);
        let ans = 0,
            maxT = 0;
        cpws.sort((a, b) => b[0] - a[0]);
        for (const [p, s] of cpws) {
            const t = (target - p) / s;
            if (t > maxT) {
                ans++;
                maxT = t;
            }
        }
        return ans;
    }
}
