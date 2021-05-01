/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//进阶：
// 你是否可以不用额外空间解决此题？
//使用快慢指针法，找到相遇结点，然后以相遇结点和头结点分别为起点，遍历链表，之后相遇的点就是入环的第一个结点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) return null

    let fast = head.next.next, slow = head.next;
    while (fast) {
        if (fast === slow) {
            while (head) {
                if (head !== fast) {
                    head = head.next
                    fast = fast.next
                } else {
                    return head
                }
            }

        } else {
            if (fast.next) {
                fast = fast.next.next
                slow = slow.next
            } else {
                return null
            }
        }
    }
    return null
};


//另一种写法
var detectCycle2 = function(head) {
    let fast = head
    let slow = head
    while (true) {
        if (!fast || !fast.next || !fast.next.next) {
            return null
        }
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }


    let helper = head

    while (true) {
        if (helper === slow) {
            break
        }
        helper = helper.next
        slow = slow.next
    }

    return helper
};
