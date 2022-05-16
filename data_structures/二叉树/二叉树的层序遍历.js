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

var levelOrder = function(root) {
    var result = []
    if (root == null) return result
    var queue = []
    // 根节点入队
    queue.push(root)
    var len
    while ((len = queue.length) !== 0) {
        var level = []
        for (var i = 0; i < len; i++) {
            var temp = queue.shift()
            if (temp.left !== null) {
                queue.push(temp.left)
            }
            if (temp.right !== null) {
                queue.push(temp.right)
            }
            level.push(temp.val)
        }
        result.push(level)
    }
    return result
}

let three = new TreeNode(3)
let nine = new TreeNode(9)
let two = new TreeNode(20)
let five = new TreeNode(15)
let seven = new TreeNode(7)

three.left = nine
three.right = two
two.left = five
two.right = seven

console.log(levelOrder(three))
console.log(levelOrder(null))
console.log(levelOrder(new TreeNode(6)))
module.exports = levelOrder
