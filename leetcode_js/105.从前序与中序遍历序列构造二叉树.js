/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//思路: 通过前序和中序递归的写出二叉树。
//前序序列的第一个结点永远是根结点，根节点在中序序列中位置mid，中序序列的左边是左子树，右边是右子树
//递归函数，有两个参数，中序遍历的左起点和右终点。闭区间
//先得到根结点，然后对左右子树进行遍历，传入0~mid-1, mid+1 inorder.length-1
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if (preorder.length === 0 && inorder.length === 0) {
        return null
    }

    let i = 0, high = inorder.length - 1, low = 0;
    let root = new TreeNode(preorder[i])
    let mid = inorder.indexOf(preorder[i]) // 根据根结点，将中序序列 一分为二

    root.left = pinjie(low, mid - 1) //中序序列的 左半部分是左子树
    root.right = pinjie(mid + 1, high); //中序序列的 右半部分是右子树

    function pinjie(low, high) {
        if (i < preorder.length - 1) {
            if (low > high) {
                return null
            }
            if (low === high) {
                //说明是叶子结点
                i++
                return new TreeNode(inorder[low])
            }
            if (low < high) {
                i++
                let root1 = new TreeNode(preorder[i])
                let mid = inorder.indexOf(preorder[i])
                root1.left = pinjie(low, mid - 1)
                root1.right = pinjie(mid + 1, high)
                return root1
            }
        }else{
            return  null
        }
    }

    return root
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

let myTree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// let myTree = buildTree([1, 2, 3], [3, 2, 1])
// console.log(myTree)
