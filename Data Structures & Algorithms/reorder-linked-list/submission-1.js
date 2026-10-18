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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next || !head.next.next) return head;
        let slow = head, fast = head;
        while (fast) {
            slow = slow.next;
            fast = fast.next?.next;
        }

        let curr = head;
        while (curr.next.next !== slow) {
            curr = curr.next;
        }
        curr.next.next = null;
        slow = this.reverseList(slow);

        let ans = new ListNode();
        curr = ans;

        while (head && slow) {
            curr.next = head;
            head = head.next;
            curr.next.next = slow;
            slow = slow.next;
            curr = curr.next.next;
        }

        if (head) {
            curr.next = head;
        }

        return ans.next;

    }

    reverseList(head) {
        if (!head || !head.next) return head;
        let prev = null;
        while (head) {
            const temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }
}
