/*

Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: root = [3,9,20,null,null,15,7]
Output: true

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Input: root = []
Output: true

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
 * @return {boolean}
 */


const isBalanced = function(root) {
    let result = true;

    const dfs = (node) => {

        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (Math.abs(left - right) > 1) result = false;

        return Math.max(left, right) + 1;
    }

    dfs(root);

    return result;

};