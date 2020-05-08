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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = [[root]], resultValue = []
    let index = 0;

    while (index < result.length) {
        let i = 0
        let level = []
        let levelNode = []

        while (i < result[index].length) {
            let cur = result[index][i]
            console.log(cur.val, 28)
            level.push(cur.val)

            if (cur.left) levelNode.push(cur.left)
            if (cur.right) levelNode.push(cur.right)
            i++

        }
        console.log(level, 3737)
        resultValue.push(level)
        result.push(levelNode)

        index++
    }
    console.log(resultValue, 42)

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

levelOrder(three)
