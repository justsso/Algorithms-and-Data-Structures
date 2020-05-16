//中序遍历：先左孩子，再根元素，然后右孩子
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
var inorderTraversal = function (root) {
    let result = []

    function read(root) {
        if (!root) {
            return
        }
        if (root.left) {
            read(root.left)
        }
        if (root.val) {
            result.push(root.val)
        }
        if (root.right) {
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

let at = inorderTraversal(one)
let a = inorderTraversal(F)
console.log(at)
console.log(a)
console.log(inorderTraversal(null))

//迭代法,左中右
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal2(root) {
    let curr = root
    let stack = []
    let result = []

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        result.push(curr.val)
        curr = curr.right
    }
    
    return result
}

console.log(inorderTraversal2(one))
