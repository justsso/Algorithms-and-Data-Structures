/**
 * // Definition for a Node.
 *  */
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

//while 迭代法
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    //因为是完美二叉树，所以没有子孩子的是最后一层树
    //递归的把每一层传入函数

    //遍历每一层的最左边的节点，要看自己这一层有没有next，要看上一层的父节点有没有next
    //由于子节点没有指向父节点的指针，所以传入父节点


    if (!root) return root

    let line = root;
  
    while (line) {
        let Left = line.left  //下一层的头

        let head = line;
        while (head){
            if (head.left && head.right) {
                head.left.next = head.right
            }

            if (head.next && head.right) {   //因为已知是完美二叉树
                head.right.next = head.next.left //建立连接
            }
            head = head.next
        }
        line = Left;
    }
    return root;

};

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven


// let result = connect(one)
// console.log(JSON.stringify(result, '', 4))

//测试： [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13]

//广度优先遍历 法，利用队列记录每一层的节点
let connect2 = function (root){
    if(!root) return root
    let queue = []

    queue.push(root)

    while(queue.length){
        let len = queue.length

        //一层
        for(let i = 0; i< len; i++){
            let node = queue.shift()
            if(i === len -1){    //达到这一层的结尾
               node.next = null
            }else {
                node.next = queue[0]     //同一层的节点保持关系
            }
            
            if(node.left){
                queue.push(node.left)
            } 
            if(node.right){
                queue.push(node.right)
            }
        }

    }
    return root
}

let result2 = connect2(one);

console.log(JSON.stringify(result2, '', 4))

//递归写法，将两棵树连接

let connect3 = function (root){
    if(!root) return root

    help(root.left, root.right)
    return root;

    function help(left, right){
        if(!left || !right) return ;

        left.next = right
        help(left.left,left.right) //因为已知是完美二叉树了，所以一定有右节点 
        help(left.right,right.left)  //同上，已知完美二叉树
        help(right.left, right.right)  //同上，已知完美二叉树
    }
}

