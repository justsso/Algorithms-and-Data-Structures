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
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let node = new ListNode(null), n = 0;
    node.next = head;
    let cur = head;
    let pre = head

    while (cur) {
        cur = cur.next
        n++
        if (n % k === 0) {
            //正好够k的整数倍，反转前面的
            let node = pre.next, _head = pre, _tail = pre;
            while (node !== cur) {
                let _n = n;
                node.next = _head
                _head = node;
                node = _n;
                pre = node;
            }
            //反转完了，在拼接起来
            _tail.next = node
        }
    }

    //拼接上剩余的结点

};
