/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => {
            if (a.start > b.start) return 1;
            return a.end - b.end;
        });
        const n = intervals.length;
        for (let i = 1; i < n; i++) {
            if (intervals[i].start < intervals[i - 1].end) return false;
        }
        return true;
    }
}
