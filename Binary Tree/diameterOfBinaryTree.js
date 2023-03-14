/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Input: root = [1,2]
Output: 1

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const diameterOfBinaryTree = (root) => {

    let diameter = 0;
    
    //depth first search to calculate the max depth
    const dfs = (node) => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);

        //check if the length between the two sides of the tree is larger than the diameter
        //if so, update
        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    };

    dfs(root);

    //total levels and then minus one for the distances (basically +1 and then -1)
    return diameter
};