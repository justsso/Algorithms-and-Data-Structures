/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false
    if (!head.next) {
        return false
    }

    let h1 = head.next, h2 = head.next.next;
    while (h1 && h2) {
        if (h1 === h2) {
            return true
        } else {
            if (h1.next && h2.next) {
                h1 = h1.next
                h2 = h2.next.next
            } else {
                return false
            }
        }
    }
    return false
};
