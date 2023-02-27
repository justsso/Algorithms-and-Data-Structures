//206. 反转链表
//反转一个单链表。
//
// 示例:
//
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//迭代法找，利用一个伪结点Null
var reverseList = function (head) {
    let pre = null
    let cur = head
    while (cur) {
        let next = cur.next //标记下一个结点next
        cur.next = pre //将当前结点的next指向前一个结点pre
        pre = cur   //当前结点cur当作前一个结点pre
        cur = next  //next结点变成当前结点cur
    }

    return pre ;
};

let head = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
head.next = two
two.next = three

console.log(head)
console.log(reverseList(head))
