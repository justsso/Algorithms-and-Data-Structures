//中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 后序遍历数组的最后一个元素是根结点
// 后序遍历的前半部分是左孩子，后半部分是右孩子
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null
    }

    let len = postorder.length - 1
    let root = new TreeNode(postorder[len]) //根结点
    let map = new Map()

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    let mid = inorder.indexOf(postorder[len])


    root.left = pinjie(0, mid - 1, map, 0, mid - 1)
    root.right = pinjie(mid , len - 1, map, mid + 1, len - 1)


    //递归函数
    /**
     *
     * @param postLow 后序遍历序列的左起点
     * @param postHigh 后序遍历序列的右起点
     * @param map 中序遍历的map，优化查找速度
     * @param inLow 中序遍历序列的左起点
     * @param inHigh 中序遍历序列的右起点
     */
    function pinjie(postLow, postHigh, map, inLow, inHigh) {
        if (postLow > postHigh) return null

        if (postLow === postHigh) return new TreeNode(postorder[postLow])

        if (postLow < postHigh) {
            let root = new TreeNode(postorder[postHigh])
            let mid = inorder.indexOf(postorder[postHigh])
            root.left = pinjie(postLow, postLow + mid - inLow - 1, map, inLow, mid - 1)
            root.right = pinjie(postLow + mid - inLow, postHigh-1, map, mid +1, inHigh)
            return root
        }
    }
    return root;
};
let root = buildTree([9,3,15,20,7], [9,15,7,20,3])
console.log(root)
