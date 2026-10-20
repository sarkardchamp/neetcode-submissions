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
     * @return {number[][]}
     */
    levelOrder(root) {
        const ans = [];
        const dfs = (node, d = 0) => {
            if (node) {
                if (!ans[d]) ans[d] = [];
                ans[d].push(node.val);
                dfs(node.left, d + 1);
                dfs(node.right, d + 1);
            }
        }
        dfs(root);
        return ans;
    }
}
