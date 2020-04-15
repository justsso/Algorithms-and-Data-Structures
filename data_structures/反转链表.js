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
//思路：从第二个结点开始遍历，然后遍历到最后一个结点
var reverseList = function (head) {
    if (!head) return null
    let cur = head.next;
    let pre = head  //pre一直指向原来的头结点

    while (cur) {
        //把下一个结点先缓存得到
        let next_cur = cur.next;
        //把当前结点放置到头结点
        pre.next = cur.next
        cur.next = head
        head = cur //把当前结点置换为头结点，然后头结点head指向引用
        cur = next_cur
    }
    return head

};
