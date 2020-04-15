// 删除链表中等于给定值 val 的所有节点。


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
 * @param {number} val
 * @return {ListNode}
 */
//删除链表结点，一定要找到链表结点的前面的1个结点
var removeElements = function (head, val) {
    let cur = head
    let pre = null
    while (cur) {
        console.log(cur.val)
        if (cur.val === val) {
            if (pre === null) {
                //代表删除头结点
                head = head.next
                cur = head
            } else {
                if (cur.next) {
                    pre.next = cur.next
                    cur = cur.next
                } else {
                    //代表删除最后一个结点
                    pre.next = null
                    cur = cur.next
                }
            }
        } else {
            pre = cur
            cur = cur.next
        }
    }
    return head
};
// 1->2->6->3->4->5->6, val = 6

let c1 = new ListNode(1)
let c2 = new ListNode(2)
let c3 = new ListNode(6)
let c4 = new ListNode(3)
let c5 = new ListNode(4)
let c6 = new ListNode(5)
let c7 = new ListNode(6)
c1.next = c2
c2.next = c3
c3.next = c4
c4.next = c5
c5.next = c6
c6.next = c7


console.log(JSON.stringify(removeElements(c1, 6), null, 4))
