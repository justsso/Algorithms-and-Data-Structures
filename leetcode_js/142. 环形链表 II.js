//给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//使用Map方法
var detectCycle = function (head) {
    if (!head) return null;
    let m = new Map()
    while (head) {
        if (m.has(head)) {
            //有环，且这个结点就是入环的第一个点
            return head
        } else {
            m.set(head, 1)
            head = head.next
        }
    }
    return null
};

//进阶，不使用额外空间；使用一二步进法，以相交的点为出发点，同时以head为触发点，遍历单链表，相交的结点就是入环的第一个结点
//可以画图来表示

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let detectCycle2 = function (head) {
    if (!head) return null
    if (!head.next) return null

    let fast = head.next.next, slow = head.next;

    while (fast && slow) {
        if (fast === slow) {
            // 找到"一二步进法"的相交点

            //找到"一二步进法"相交点之后，再以两条路去遍历链表，去找入环的第一个结点
            while (head !== fast) {
                if (head.next && fast.next) {
                    head = head.next
                    fast = fast.next
                }
            }
            return fast

        } else {
            if (fast.next && fast.next.next && slow.next) {
                fast = fast.next.next
                slow = slow.next
            } else {
                //说明没有环
                return null
            }
        }
    }
    return null
}
