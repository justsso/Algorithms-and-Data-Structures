// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//进阶：
//
// 你能尝试使用一趟扫描实现吗？

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

//思路：利用双指针法，一次遍历出倒数第k个结点，然后删除它
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let yuan = new ListNode(null);
    yuan.next = head;
    let fast = yuan
    let slow = yuan
    while (n > 0) {
        fast = fast.next
        n--
    }

    //快指针比慢指针多走了K步，然后两者再同时走，当快指针走到最后时，慢指针指的就是倒数第K个元素

    let pre = slow
    while (fast) {
        fast = fast.next
        pre = slow;
        slow = slow.next
    }
    //删除slow指的那个结点，删除某个结点，要找到它的前一个结点
    if (slow.next) {
        pre.next = slow.next
    } else {
        pre.next = null;
    }
    return yuan.next
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
    let yuan = new ListNode(null)
    yuan.next = head;
    let fast = yuan, slow = yuan;
    while (n) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return yuan.next;
}
