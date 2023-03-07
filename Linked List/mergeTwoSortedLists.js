/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return null;
    const arr = [];
    let curr1 = list1, curr2 = list2;
    while (curr1 || curr2) {
        const curr1Val = curr1 ? curr1.val : 101;
        const curr2Val = curr2 ? curr2.val : 101;
        if (curr1Val <= curr2Val) {
            arr.push(curr1);
            curr1 = curr1.next;
        } else {
            arr.push(curr2);
            curr2 = curr2.next
        }
    }
    for (let i = 0; i < arr.length-1; i++) {
        arr[i].next = arr[i+1];
    }

    return arr[0];
};