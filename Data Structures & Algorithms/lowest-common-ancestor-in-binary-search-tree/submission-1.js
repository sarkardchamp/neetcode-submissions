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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const val = root.val;
        if (val < p.val && val < q.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }
        if (val > p.val && val > q.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }
        return root;
    }
}
