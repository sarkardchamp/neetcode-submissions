/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node;
        const nodes = [];
        const dfs = (root) => {
            if (root) {
                if (!nodes[root.val]) {
                    nodes[root.val] = new Node(root.val);
                }
                for (const node of root.neighbors) {
                    if (!nodes[node.val]) dfs(node);
                    nodes[root.val].neighbors.push(nodes[node.val]);
                }
            }
        };
        dfs(node);
        return nodes[node.val];
    }
}
