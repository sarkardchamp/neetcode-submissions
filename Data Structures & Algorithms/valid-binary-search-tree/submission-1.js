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
    isValidBST(root, min = -1000000001, max = 1000000001) {
        if (!root) return true;
        let isNodeValid = root.val > min && root.val < max;
        if (!isNodeValid) return false;
        if (root.left) {
            isNodeValid &&= root.val > root.left.val;
        }
        if (root.right) {
            isNodeValid &&= root.val < root.right.val;
        }
        return (
            isNodeValid &&
            this.isValidBST(root.left, min, root.val) &&
            this.isValidBST(root.right, root.val, max)
        );
    }
}
