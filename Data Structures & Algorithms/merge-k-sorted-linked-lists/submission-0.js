/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists.length) return null;
        if (lists.length === 1) return lists[0];
        const m = Math.floor(lists.length / 2);
        let left = this.mergeKLists(lists.slice(0, m));
        let right = this.mergeKLists(lists.slice(m));
        const ans = new ListNode();
        let curr = ans;
        while (left && right) {
            if (left.val < right.val) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;
        }

        if (left) {
            curr.next = left;
        }

        if (right) {
            curr.next = right;
        }

        return ans.next;
    }
}
