/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Input: root = [2,1], p = 2, q = 1
Output: 2

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    //set ancester to be root
    let ancestor = root;
    //if ancester val is larger than p and q value
    //update ancester to be ancester's left
    if (ancestor.val > p.val && ancestor.val > q.val) {
        ancestor = ancestor.left;
        return lowestCommonAncestor(ancestor, p, q);
    }
    //if ancester val is smaller than p and q value
    //update ancester to be ancester's right
    else if (ancestor.val < p.val && ancestor.val < q.val) {
        ancestor = ancestor.right;
        return lowestCommonAncestor(ancestor, p, q);
    }
    //if between
    //return ancester
    else return ancestor;
};