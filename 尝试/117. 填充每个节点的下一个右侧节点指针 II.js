/**
 * 给定一个二叉树

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/*
此题和“I”的区别是：二叉树不是完美二叉树，一个节点有可能只有左孩子，也可能只有右孩子
*/


function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

//解法和上题类似，如果采用 队列辅助的形式，那么不用改代码就可以用到此题
//方法一： 辅助队列，层序遍历
/**
 * @param {Node} root
 * @return {Node}
 */
let connect1 = function (root) {
    if (!root) return root

    let quene = []
    quene.push(root)

    while(quene.length > 0){
      let size = quene.length

      for(let i = 0;i< size; i++){
          let node = quene.shift()
          if(i === size-1){
            node.next = null
          }else{
            node.next = quene[0]
          }

          if(node.left){
            quene.push(node.left)
          }
          if(node.right){
            quene.push(node.right)
          }

      }
    }

    return root
}

