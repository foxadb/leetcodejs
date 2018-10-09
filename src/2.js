/**
 * 2. Add Two Numbers
 * 
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // Init result list
    const result = new ListNode();

    // Init carried number to 0
    let carry = 0;

    // Init iterators
    let [it1, it2] = [l1, l2];
    let itRes = result;

    // Iterate while there at least one node or carry is not null
    while (it1 || it2 || carry) {
        // Replace null list with 0 number value
        let val1 = it1 ? it1.val : 0;
        let val2 = it2 ? it2.val : 0;

        // Compute digits sum
        digitSum = val1 + val2 + carry;
        carry = 0;

        // Set carried number in overflow case
        if (digitSum > 9) {
            digitSum -= 10;
            carry = 1;
        }

        // Set computed digit value
        itRes.next = new ListNode(digitSum);

        // Next iteration
        it1 = it1 ? it1.next : null;
        it2 = it2 ? it2.next : null;
        itRes = itRes.next;
    }

    return result.next;
};

module.exports = { ListNode, addTwoNumbers };