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
     * @return {number}
     */
    goodNodes(root) {
        let ans = 0;
        const dfs = (node, max) => {
            if (node) {
                if (node.val >= max) ans++;
                const newMax = Math.max(max, node.val);
                dfs(node.left, newMax);
                dfs(node.right, newMax);
            }
        };
        dfs(root, root.val);
        return ans;
    }
}
