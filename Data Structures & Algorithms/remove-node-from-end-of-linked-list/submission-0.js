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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let l = 0, curr = head;
        while (curr) {
            l++;
            curr = curr.next;
        }
        if (n === l) return head.next;
        n = l - n - 1;
        curr = head;
        while (n) {
            curr = curr.next;
            n--;
        }
        curr.next = curr.next.next;
        return head;
    }
}
