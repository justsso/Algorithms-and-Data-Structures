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

//思路：链表从头相加到尾，遇到10向下一位进1;如果要用数学的方法，各种转换，有时数字会超过最大值，无法计算
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let newHead = new ListNode(null), cur = newHead

    let c1 = l1, c2 = l2
    let jin = 0
    while (c1 && c2) {
        let sum = c1.val + c2.val + jin;
        if (sum > 9) {
            sum = sum - 10
            jin = 1
        } else {
            jin = 0
        }

        let newNode = new ListNode(sum)
        cur.next = newNode
        cur = newNode
        c1 = c1.next
        c2 = c2.next
    }

    let long = c1 ? c1 : c2;

    //最后还有进位
    if (jin) {
        //进位再和剩余的链表相加
        if (long) {
            let temp = long, pre = temp //记住前一个结点，以防最后多出来一个进位，找不到前一个结点连接它
            while (temp) {
                if ((jin + temp.val) > 9) {
                    temp.val = jin + temp.val - 10
                    jin = 1
                    pre = temp
                    temp = temp.next
                } else {
                    temp.val = jin + temp.val
                    jin = 0
                    break
                }
            }
            if (jin > 0) {
                pre.next = new ListNode(jin)
            }

            cur.next = long

        } else {
            cur.next = new ListNode(jin)
        }
    } else {
        cur.next = long
    }
    return newHead.next

};

//测试用例
//[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]


//测试用例
// [1]
// [9,9]
