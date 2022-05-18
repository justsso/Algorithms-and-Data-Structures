function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
   let item = new ListNode(-1);
   let head = item;
   let add = 0;
   while(true){
       if(l1==null){
           item.next = l2;
           break;
       }
       if(l2==null){
           item.next = l1;
           break;
       }
       let num =l1.val+l2.val+add;
       if(num>=10){
           add = 1;
           num = num-10;
       }else{
           add=0;
       }
       item.next = new ListNode(num);
       l1 = l1.next;
       l2 = l2.next;
       item = item.next;
   }
   while(add!==0){
       if(item.next == null&&add>0){
           item.next = new ListNode(add);
           break;
       }
       let num =item.next.val+add;
       if(num>=10){
           add = 1;
           num = num-10;
       }else{
           add=0;
       }
       item.next.val = num;
       item = item.next;
   }
   return head.next;
};

function addTwoNumbers2(l1, l2){
    let carry = 0;
    let head = null;
    let tail = null;

    while(l1 || l2){
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        if(sum > 9){
            sum = sum - 10;
            carry = 1;
        }else{
            carry = 0;
        }
        if(!head){
            head = tail = new ListNode(sum);
        }else{
            tail.next = new ListNode(sum);
            tail = tail.next;
        }
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    if(carry){
        tail.next = new ListNode(carry);
        tail = tail.next;
    }
    return head;
}


