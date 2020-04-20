/*
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。


示例：

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3


提示：

所有val值都在 [1, 1000] 之内。
操作次数将在  [1, 1000] 之内。
请不要使用内置的 LinkedList 库。
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let myLinkedList = function () {
    this.head = null;
    this.listLen = 0;
}

myLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.listLen) {
        return -1;
    }
    let temp_i = 0;
    let temp_node = this.head;
    while (temp_i < index) { //a->b->c
        temp_node = temp_node.next
        temp_i += 1
    }
    return temp_node.val
}

//在头部添加一个结点
myLinkedList.prototype.addAtHead = function (val) {
    if (this.listLen === 0) {
        let cur = new ListNode(val)
        this.head = cur;
        this.listLen += 1;
    } else {
        let cur = new ListNode(val);
        cur.next = this.head;
        this.head = cur;
        this.listLen += 1;
    }
}

//在尾部添加结点
myLinkedList.prototype.addAtTail = function (val) {
    let cur = new ListNode(val)
    if (this.head === null) {
        this.head = cur
    } else {
        let node = this.head
        while (node.next !== null) {
            node = node.next
        }
        node.next = cur;
    }
    this.listLen++
}

//在第几个位置之前添加一个结点
myLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) {
        //    在头部添加
        this.addAtHead(val)
    } else if (index === this.listLen) {
        //    在尾部添加
        this.addAtTail(val)
    } else if (index > this.listLen) {
        //    不添加
        return;
    } else {
        //    在 index之前插入 [1->3] index = 1
        let pre = this.head;
        while (index - 1) {
            pre = pre.next;
            index = index - 1
        }
        let cur = new ListNode(val);
        cur.next = pre.next
        pre.next = cur;
        this.listLen += 1;
    }
}

//如果Index有效的话，删除链表中第几个位置
myLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.listLen) {
        return
    } else {

        if (index === 0) {
            //删除首结点
            this.head = this.head.next
            this.listLen--
        } else {
            //删除其他结点
            let cur = this.head
            let pre;
            let temp_i = 0
            while (temp_i < index) {
                pre = cur
                cur = cur.next
                temp_i++
            }
            pre.next = cur.next
            this.listLen--
        }
    }
}

let mylist = new myLinkedList()
mylist.addAtHead(1);
console.log(mylist)

mylist.addAtTail(3);
console.log(mylist)
mylist.addAtIndex(1, 2)
console.log(mylist)

console.log(mylist.get(1))

mylist.deleteAtIndex(1)
console.log(mylist)
mylist.addAtTail(4)


console.log(mylist.get(2))

//把得到index位置的结点，方法总结出来getNode
