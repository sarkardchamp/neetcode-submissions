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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = null, idx = 0;
        const dfs = (node) => {
            if (node) {
                dfs(node.left);
                idx += 1;
                if (idx === k) {
                    ans = node.val;
                    return;
                }
                dfs(node.right);
            }
        }
        dfs(root);
        return ans;
    }
}
