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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true;
        if (root && subRoot) {
            return (
                this.isSubtree(root.left, subRoot) ||
                this.isSubtree(root.right, subRoot) ||
                this.isSameTree(root, subRoot)
            );
        }
        return false;
    }

    isSameTree(nodeA, nodeB) {
        if (nodeA && nodeB) {
            return (
                nodeA.val === nodeB.val &&
                this.isSameTree(nodeA.left, nodeB.left) &&
                this.isSameTree(nodeA.right, nodeB.right)
            );
        }
        if (!nodeA && !nodeB) {
            return true;
        }
        return false;
    }
}
