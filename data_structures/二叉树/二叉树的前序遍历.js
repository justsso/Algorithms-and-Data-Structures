//先遍历根结点，再左孩子，然后右孩子
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
 * @return {number[]}
 */

//递归写法
var preorderTraversal = function (root) {
    let result = [];

    function read(root) {
        if (root && root.val) {
            result.push(root.val)
        }

        if (root && root.left) {
            read(root.left)
        }
        if (root && root.right) {
            read(root.right)
        }
    }

    read(root)
    return result
};

let one = new TreeNode(1)
let two = new TreeNode(2)
let three = new TreeNode(3)

one.right = two
two.left = three


let F = new TreeNode('F'), A = new TreeNode('A'), B = new TreeNode('B'), C = new TreeNode("C"),
    D = new TreeNode('D'), E = new TreeNode('E'), G = new TreeNode('G'), H = new TreeNode('H'), I = new TreeNode('I');

F.left = B
F.right = G
B.left = A
B.right = D
D.left = C
D.right = E
G.right = I
I.left = H

// let at = preorderTraversal(one)
// let a = preorderTraversal(F);
// let a = preorderTraversal(null)
// console.log(at)
// console.log(a)

//迭代写法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal2(root) {
    let node = root;
    let result = [];
    let stack = [];

    while (node) {
        const {left, right, val} = node;
        result.push(val);
        if (right) stack.push(right);
        if (left) stack.push(left);
        node = stack.pop();
    }
    return result
}

// console.log(preorderTraversal2(one))
// console.log(preorderTraversal2(F))
module.exports = preorderTraversal2
