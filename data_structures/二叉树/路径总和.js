/*
给定一个二叉树和一个目标和，判断该树中是否存在从根结点到叶子结点的路径，这条路径上所有结点值相加等于目标和。
说明: 叶子节点是指没有子节点的节点。
思路：一个树从根结点到叶子结点的所有路径是确定的，所以用迭代的方式找到所有的路径，在找到一条路径所有结点相加等于目标和就停止查找。
有几个叶子结点就有几条路径
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 思路：利用递归，判断到叶子结点，判断传入的sum是否和叶子结点的val相等
var hasPathSum = function (root, sum) {
    if (!root) return false

    if (!root.left && !root.right) {
        return root.val === sum
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
//利用迭代，利用栈保存读入的结点和剩余需要满足的sum
//栈中存放的是要找的结点的 记录，每次都是从栈中pop出一个结点，把该结点的子结点，和差满足sum的值cha都加入栈，然后迭代。如果抛出的结点是叶子结点，且cha===0则满足条件
function hasPathSum2(root, sum) {
    if (!root) return false

    //初始化 栈
    let stack = [{node: root, cha: sum - root.val}]

    while (stack.length > 0) {

        let {node, cha} = stack.pop()

        if (!node.left && !node.right) {
            if (cha === 0) return true  //叶子结点，且到叶子结点，正好等于目标值
        }

        if (node.right) {
            let right_node = {node: node.right, cha: cha - node.right.val}
            stack.push(right_node)
        }
        if (node.left) {
            let left_node = {node: node.left, cha: cha - node.left.val}
            stack.push(left_node)
        }
    }
    return false
}


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5)
let seven = new TreeNode(7)
let eight = new TreeNode(8)
let eleven = new TreeNode(11)
let thirten = new TreeNode(13)
let four_2 = new TreeNode(4)

five.left = four
five.right = eight
four.left = eleven
eleven.left = seven
eleven.right = two
eight.left = thirten
eight.right = four_2
four_2.right = one

let result = hasPathSum2(five, 18)
console.log(result)
