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

//O(1)(即常量内存)，使用快慢指针，有环终究会相遇
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false
    }

    let fast = head.next.next, slow = head.next
    while (fast) {
        if (fast === slow) {
            return true
        } else {
            if (fast.next) {
                fast = fast.next.next
                slow = slow.next
            } else {
                return false
            }
        }
    }
    return false
};
