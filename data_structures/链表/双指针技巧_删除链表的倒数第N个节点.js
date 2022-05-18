/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 这题有三种解法，一、利用数组，遍历链表，将节点都推入数组中，然后取数组下标来删除节点
 * 二、利用栈，和数组方法类似，都推入栈，然后pop出n-1个，第n个就是要删除的节点
 * 三、快慢指针，快指针先走n步，然后快、慢指针一起走，当快指针走到最后一个节点，慢指针对应的就是要删除的节点，同步用pre记录slow的前节点，
 * pre初始值是null，【不过要注意判断要删除的是不是头节点】。
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


//  快慢指针，快指针先走n步，慢指针再走。当快指针到达尾节点时，慢指针就是倒数第几个。
//  同时，让prev 记录慢指针的前面的一个节点
var removeNthFromEnd = function(head, n) {
    let pre = null;
    let slow = head;
    let quick = head;
    
    // 快指针先行n步
    let i = 1;
    while(i < n){
        quick = quick.next;
        i++;
    }

    while(quick.next){  // 快指针quick移动到尾节点，是quick.next != null
        quick = quick.next;
        pre = slow;
        slow = slow.next;
    }
    if(pre){
        pre.next = slow.next;  // 说明要删除的slow是中间节点，删除掉slow节点
    }else{
        // 说明pre = null,slow指向头节点，要删除的是头节点
        head = slow.next;
    }

    return head;
};