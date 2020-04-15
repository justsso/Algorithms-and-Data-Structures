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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || head.next === null) return head
    let odd = head, even = head.next, evenHead = head.next;

    let cur = head.next.next, index = 3 //从第三个结点开始遍历
    while (cur) {
        if (index % 2 === 1) {
            //奇数
            odd.next = cur
            odd = cur
        } else {
            //偶数
            even.next = cur
            even = cur
        }
        index += 1
        cur = cur.next
    }
    //偶数链的最后一个结点指向null
    even.next = null
    //拼接奇偶链
    odd.next = evenHead

    return head
};
let c1 = new ListNode(1)
let c2 = new ListNode(2)
let c3 = new ListNode(3)
let c4 = new ListNode(4)
let c5 = new ListNode(5)
c1.next = c2
c2.next = c3
c3.next = c4
c4.next = c5
oddEvenList(c1)
