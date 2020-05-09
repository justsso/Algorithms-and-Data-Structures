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
 * @return {number}
 */
//自下而上
var maxDepth = function (root) {
    if (!root) {
        return 0
    }

    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    return Math.max(leftDepth, rightDepth) + 1

};
let three = new TreeNode(3)
let nine = new TreeNode(9)
let two = new TreeNode(20)
let five = new TreeNode(15)
let seven = new TreeNode(7)

three.left = nine
three.right = two
two.left = five
two.right = seven

console.log(maxDepth(three))


//自上而下
let answer = 0

function maxDepth2(root, depth) {
    if (root === null) {
        return
    }
    if (root.left === null && root.right === null) {
        answer = Math.max(answer, depth)
    }
    maxDepth2(root.left, depth + 1)
    maxDepth2(root.right, depth + 1)

}

maxDepth2(three, 1)
console.log(answer)
