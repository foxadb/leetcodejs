/**
 * 21. Merge Two Sorted Lists
 *
 * Merge two sorted linked lists and return it as a sorted list. The list
 * should be made by splicing together the nodes of the first two lists.
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    return {
        val: val === undefined ? 0 : val,
        next: next === undefined ? null : next
    };
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let current;
    if (l1.val < l2.val) {
        current = l1;
        current.next = mergeTwoLists(l1.next, l2);
    } else {
        current = l2;
        current.next = mergeTwoLists(l1, l2.next);
    }
    return current;
};

module.exports = { ListNode, mergeTwoLists };
