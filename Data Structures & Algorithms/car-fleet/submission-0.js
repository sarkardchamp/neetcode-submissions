class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cpws = [], n = position.length, st = [];
        for (let i = 0; i < n; i++) {
            cpws[i] = [position[i], speed[i]];
        }
        cpws.sort((a, b) => b[0] - a[0]);
        for (const car of cpws) {
            const [p, s] = car;
            const t = (target - p) / s;
            if (!st.length || t > st[st.length - 1]) st.push(t);
        }
        return st.length;
    }
}
