/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

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

const middleNode = (head) => {
    //TWO POINTERS
    // let fast = slow = head;
    // while (fast && fast.next) {
    //     fast = fast.next.next;
    //     slow = slow.next;
    // }
    // return slow;

    //TRADITIONAL
    //iterate over the linked list the get the length
    let length = 0, curr = head;
    while (curr) {
        length++;
        curr = curr.next
    }
    //find the middle
    const middleIdx = Math.floor(length / 2);
    //iterate to the middle node and return it
    let currIdx = 0;
    curr = head;
    while (curr) {
        if (currIdx === middleIdx) {
            return curr;
        }
        currIdx++;
        curr = curr.next;
    }
    return head;
};