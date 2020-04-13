/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let temp = head;

    let num_str = '';
    while (temp !== null) {
        num_str += temp.val
        temp = temp.next
    }

    return parseInt(num_str, 2)
};
let head = new ListNode(1)
let two = new ListNode(0)
let three = new ListNode(1)
head.next = two
two.next = three
console.log(getDecimalValue(head))
