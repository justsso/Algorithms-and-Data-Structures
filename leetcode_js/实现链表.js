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
