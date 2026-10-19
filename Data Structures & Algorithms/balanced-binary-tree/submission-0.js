/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let ans = true;
        const height = (node) => {
            if (!node) return 0;
            const left = height(node.left);
            const right = height(node.right);
            ans &&= (Math.abs(left - right) <= 1);
            return 1 + Math.max(left, right);
        };
        height(root);
        return ans;
    }
}
