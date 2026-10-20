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
        if (!root) return ans;
        let level = [root];
        while (level.length) {
            const nLevel = [], vals = [];
            for (const node of level) {
                vals.push(node.val);
                if (node.left) {
                    nLevel.push(node.left);
                }
                if (node.right) {
                    nLevel.push(node.right);
                }
            }
            ans.push(vals);
            level = nLevel;
        }
        return ans;
    }
}
