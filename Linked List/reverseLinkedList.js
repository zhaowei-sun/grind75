/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
    //create a prev node to keep track of the previous
    //curr node for iteration
    let prev = null, curr = head, temp;

    //while curr exists
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //return the last node as the new first
    return prev;
};