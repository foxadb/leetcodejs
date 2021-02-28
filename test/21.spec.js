const { ListNode, mergeTwoLists } = require('../src/21');

describe('21. Merge Two Sorted Lists', () => {
    it('l1 = [], l2 = []', () => {
        const l1 = ListNode();
        const l2 = ListNode();
        const l3 = ListNode(0, ListNode());
        expect(mergeTwoLists(l1, l2)).toEqual(l3);
    });

    it('l1 = [], l2 = [0]', () => {
        const l1 = ListNode();
        const l2 = ListNode(0);
        const l3 = ListNode(0, ListNode());
        expect(mergeTwoLists(l1, l2)).toEqual(l3);
    });

    it('l1 = [1, 2, 4], l2 = [1, 3, 4]', () => {
        const l1 = ListNode(1, ListNode(2, ListNode(4)));
        const l2 = ListNode(1, ListNode(3, ListNode(4)));
        const l3 = ListNode(1,
            ListNode(1,
                ListNode(2,
                    ListNode(3,
                        ListNode(4,
                            ListNode(4)
                        )
                    )
                )
            )
        );
        expect(mergeTwoLists(l1, l2)).toEqual(l3);
    });
});
