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
 * @return {number[][]}
 */
//思路：利用迭代，记录符合的路径
var pathSum = function (root, sum) {

    let results = []
    let item = []

    if (!root) {
        return results
    }
    let stack = [{node: root, cha: sum - root.val}]
    while (stack.length > 0) {
        let {node, cha} = stack.pop()

        if (!node.left && !node.right) {
            //叶子结点，且路径是对的才放入item
            if (cha === 0) {
                //找到一条符合的路径
                item.push(node)
                let cloneItem = []
                if (results.length === 0) {
                    cloneItem = [].concat(item)
                } else {
                    cloneItem = [root].concat(item)
                }
                results.push(cloneItem.map(item => {
                    return item.val
                }))
                item = []
            }
        } else {
            //    非叶子结点，直接放入item
            item.push(node)
        }

        if (node.right) {
            stack.push({node: node.right, cha: cha - node.right.val})
        }
        if (node.left) {
            stack.push({node: node.left, cha: cha - node.left.val})
        }
    }
    return results
};

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

let result = pathSum(five, 22)
result.forEach((item, index) => {
    console.log(`第${index + 1}条路径：`)
    item.forEach(oo => {
        console.log(oo.val)
    })
})
