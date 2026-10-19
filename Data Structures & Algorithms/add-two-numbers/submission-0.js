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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let ans = l1,
            carry = 0,
            prev = null;
        while (l1 && l2) {
            const val = carry + l1.val + l2.val;
            l1.val = val % 10;
            carry = Math.floor(val / 10);
            prev = l1;
            l1 = l1.next;
            l2 = l2.next;
        }

        while (l1) {
            const val = carry + l1.val;
            l1.val = val % 10;
            carry = Math.floor(val / 10);
            prev = l1;
            l1 = l1.next;
        }
        if (l2) {
            prev.next = l2;
            while (l2) {
                const val = carry + l2.val;
                l2.val = val % 10;
                carry = Math.floor(val / 10);
                prev = l2;
                l2 = l2.next;
            }
        }
        if (carry) {
            prev.next = new ListNode(carry);
        }
        return ans;
    }
}
