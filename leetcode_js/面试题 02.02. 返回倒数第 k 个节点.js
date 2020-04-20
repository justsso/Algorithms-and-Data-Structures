/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
    let fast = new ListNode(null)
    fast.next = head;
    let slow = fast
    while (k) {
        fast = fast.next
        k--
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow.val
};
