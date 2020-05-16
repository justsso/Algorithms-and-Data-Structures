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
var postorderTraversal = function (root) {
    if (root) {
        return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
    } else {
        return []
    }
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
console.log(postorderTraversal(one))
console.log(postorderTraversal(F))
console.log(postorderTraversal(null))

//迭代写法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal2(root) {
    let stack = []
    let result = []

    if (!root) {
        return result
    }

    stack.push(root)

    while (stack.length) {
        let cur = stack.pop()
        result.unshift(cur.val)
        if (cur.left) {
            stack.push(cur.left)
        }
        if (cur.right) {
            stack.push(cur.right)
        }
    }
    return result

}
console.log(postorderTraversal2(F))
