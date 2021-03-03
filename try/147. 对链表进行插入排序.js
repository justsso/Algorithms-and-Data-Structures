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
var insertionSortList = function (head) {
    //先初始化已排序的链接，和未排序的链接
    let newHead = head;
    let _head = new ListNode(null);
    _head.next = newHead;

    let current = head.next
    head.next = null
    // console.log(_head, current)

    let start = current.next
    while (current) {
        //比较current应该插入到newHead中的哪里

        // _head = new ListNode(null) //伪头
        // _head.next = newHead;
        let temp = _head;
        while (temp.next) {
            if (temp.next.val > current.val) {
                //应该在_head的前面插入

                current.next = temp.next
                temp.next = current
            }
            temp = temp.next
        }

        current = start
        start = start.next
    }
    return _head.next
};

let four = new ListNode(4)
let two = new ListNode(2)
let one = new ListNode(1)
let three = new ListNode(3)
four.next = two
two.next = one
one.next = three

let list = insertionSortList(four)
console.log(list)
