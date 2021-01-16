const { ListNode, addTwoNumbers } = require('../src/2');

describe('2. Add Two Numbers', () => {
    it('(2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
        let l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        let l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        let result = new ListNode(7);
        result.next = new ListNode(0);
        result.next.next = new ListNode(8);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    it('(5) + (5)', () => {
        let l1 = new ListNode(5);

        let l2 = new ListNode(5);

        let result = new ListNode(0);
        result.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    it('(1 -> 9 -> 3) + (4 -> 5)', () => {
        let l1 = new ListNode(1);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(3);

        let l2 = new ListNode(4);
        l2.next = new ListNode(5);

        let result = new ListNode(5);
        result.next = new ListNode(4);
        result.next.next = new ListNode(4);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
});
