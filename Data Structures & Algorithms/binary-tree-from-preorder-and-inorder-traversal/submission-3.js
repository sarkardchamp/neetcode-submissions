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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const idxMap = {}, n = inorder.length;
        for (let i = 0; i < n; i++) {
            idxMap[inorder[i]] = i;
        }
        const helper = (pl, pr, il, ir) => {
            if (pl > pr || il > ir) return null;
            const idx = idxMap[preorder[pl]];
            const root = new TreeNode(preorder[pl]);
            root.left = helper(pl + 1, pl + idx - il, il, idx - 1);
            root.right = helper(pl + idx - il + 1, pr, idx + 1, ir);
            return root;
        }
        return helper(0, n - 1, 0, n - 1);
    }
}
