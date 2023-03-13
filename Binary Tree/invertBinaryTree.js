/*

Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Input: root = [2,1,3]
Output: [2,3,1]

Input: root = []
Output: []

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
 * @return {TreeNode}
 */

const invertTree = (root) => {

    //if there are no left node and right node, return itself
    if (root === null) return null;

    //save the left node and right node
    const tempLeft = root.left;
    const tempRight = root.right;

    //swap the nodes
    root.left = invertTree(tempRight);
    root.right = invertTree(tempLeft);

    //output root
    return root;

};