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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //如果是只有一个结点的链表，是不可能有相交这个概念的
    if (headA === null || headB === null) return null

    let skipA = 0, skipB = 0
    let tempA = headA, tempB = headB
    //先都各自遍历一遍，如果尾结点相同，代表是相交的，否则不相交
    while (tempA.next) {
        tempA = tempA.next
    }
    while (tempB.next) {
        tempB = tempB.next
    }
    //最后的尾结点相同才有可比性
    if (tempA !== tempB) return null
    //然后，以一个链表为基准，每移动一位，另一个链表则从头到尾都遍历一遍，看看有没有交点，如果没有，则基准链表就往后移动一位
    //以headA为基准，遍历headB
    tempA = headA //临时变量记住headA
    tempB = headB  //临时变量作为链表B的头指针，记住它
    while (tempA) {
        // skipA += 1
        while (tempB) {
            // skipB += 1
            if (tempB === tempA) {
                //只要找到了一个相同的结点，那就是这个结点。然后彼此都遍历下去，如果到最后一个结点都相同，则该结点就是相交点，否则从头开始
                let resultNode = tempB

                while (true) {
                    if (tempB === tempA) {
                        tempB = tempB.next
                        tempA = tempA.next
                        if (tempA === null && tempB === null) {
                            return resultNode
                        }
                    } else {
                        //一旦出现不相等，就可以结束本轮遍历
                        break
                    }
                }
            } else {
                tempB = tempB.next
            }
        }

        headA = headA.next
        tempA = headA

        tempB = headB  //临时变量作为链表B的头指针，记住它
        // skipB = 0
    }
    return null
};

let a1 = new ListNode(4), a2 = new ListNode(1), a3 = new ListNode(8), a4 = new ListNode(4), a5 = new ListNode(5)

let b1 = new ListNode(5), b2 = new ListNode(0), b3 = new ListNode(1)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
b1.next = b2
b2.next = b3
b3.next = a3
// console.log(getIntersectionNode(a1, b1))

// getIntersectionNode(c1, d1)
var getIntersectionNode2 = function (headA, headB) {
    //如果是只有一个结点的链表，是不可能有相交这个概念的
    if (headA === null || headB === null) return null

    let skipA = 0, skipB = 0
    let tempA = headA, tempB = headB
    //先都各自遍历一遍，如果尾结点相同，代表是相交的，否则不相交
    while (tempA.next) {
        tempA = tempA.next
    }
    while (tempB.next) {
        tempB = tempB.next
    }
    //最后的尾结点相同才有可比性
    if (tempA !== tempB) return null
    //然后，以一个链表为基准，每移动一位，另一个链表则从头到尾都遍历一遍，看看有没有交点，如果没有，则基准链表就往后移动一位
    //以headA为基准，遍历headB
    tempA = headA //临时变量记住headA
    tempB = headB  //临时变量作为链表B的头指针，记住它
    while (tempA) {
        // skipA += 1
        while (tempB) {
            // skipB += 1
            if (tempB === tempA) {
                //只要找到了一个相同的结点，那就是这个结点。然后彼此都遍历下去，如果到最后一个结点都相同，则该结点就是相交点，否则从头开始
                return tempB
            } else {
                tempB = tempB.next
            }
        }

        headA = headA.next
        tempA = headA

        tempB = headB  //临时变量作为链表B的头指针，记住它
        // skipB = 0
    }
    return null
};

//解法： 分别算出两个链表的长度，如果一个长，就先遍历差值，然后从一样的长度开始遍历，一旦遇到一个相同的结点，就是相交的结点，否则没有相交结点
var getIntersectionNode3 = function (headA, headB) {
    let lenA = 0, lenB = 0;
    let tempA = headA, tempB = headB;
    while (tempA) {
        lenA += 1;
        tempA = tempA.next
    }
    while (tempB) {
        lenB += 1;
        tempB = tempB.next
    }
    //假设lang存储长的链表
    let lang = headA, shot = headB
    if (lenA < lenB) {
        lang = headB
        shot = headA
    }

    let cha = Math.abs(lenA - lenB)

    let tempI = 0;
    while (tempI < cha) {
        lang = lang.next
        tempI += 1
    }

    //然后开始遍历两个相等长度的链表
    while (lang && shot) {
        if (lang === shot) {
            return shot
        } else {
            lang = lang.next
            shot = shot.next
        }
    }

    return null;
};
let c1 = new ListNode(0), c2 = new ListNode(9), c3 = new ListNode(1), c4 = new ListNode(2), c5 = new ListNode(4)
let d1 = new ListNode(3)
c1.next = c2
c2.next = c3
c3.next = c4
c4.next = c5;
d1.next = c4
// console.log(getIntersectionNode3(c1, d1))
console.log(getIntersectionNode(a1, b1))
