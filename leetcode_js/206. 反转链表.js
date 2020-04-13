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

//迭代法找
var reverseList = function (head) {
//    在遍历原链表时，得有一个节点来保存下一个结点，这样就能找到
    let cur = head
    let wei_head = head;
    while (wei_head){

        wei_head = wei_head.next.next;

        cur.next.next = cur
        cur.next = null

    }
};

let head = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
head.next = two
two.next = three

console.log(head)
head.next.next = head
console.log(head)
