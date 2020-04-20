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

//尝试使用一趟扫描实现
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 利用数组
    let arr = []
    let temp = head;
    while (temp) {
        arr.push(temp)
        temp = temp.next
    }

    let index = arr.length - n
    
    if (arr[index - 1]) {
        arr[index - 1].next = arr[index].next
    } else {
        head = arr[index].next
    }
    return head
};
