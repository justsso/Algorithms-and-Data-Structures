//两种解法
//递归
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 如果一颗树是对称二叉树，那么，它的左孩子和右孩子是镜像对称的。进一步理解，两颗树镜像对称，只是两颗树的根结点时同一个结点。
// 然后一颗树的右孩子和另外一颗树的左孩子相等
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    return isMi(root, root)

    function isMi(root1, root2) {
        if (root1 === null && root2 === null) {
            return true
        }
        if (!root1 || !root2) {
            return false
        }
        if (root1.val === root2.val) {
            return isMi(root1.right, root2.left) && isMi(root1.left, root2.right)
        } else {
            return false
        }
    }
};


//迭代法
//思路：利用队列和类似广度有限搜索BFS，依次读取结点，当两个结点的值相等，则两个结点进队列；两个结点的值不相等，说明不是对称的，返回false
//初始话队列中放入两个根结点， 然后每一次迭代，从队列中依次取出两个结点。直到队列为空，返回true
var isSymmetric2 = function (root) {
    let queen = []
    queen.push(root, root)

    while (queen.length) {
        let t1 = queen.pop()
        let t2 = queen.pop()
        if(!t1 && !t2) continue
        if(!t1 || !t2) return false

        if (t1.val === t2.val) {
            //开始遍历下一层的结点
            queen.push(t1.left)
            queen.push(t2.right)
            queen.push(t1.right)
            queen.push(t2.left)

        }else{
            return false
        }
    }
    return true
};


let one = new TreeNode(1);
let two_l = new TreeNode(2);
let two_r = new TreeNode(2);
let three_l = new TreeNode(3);
let four_l = new TreeNode(4);
let three_r = new TreeNode(3);
let four_r = new TreeNode(4);

//第一棵树
one.left = two_l
one.right = two_r
two_l.left = three_l
two_l.right = four_l
two_r.left = four_r
two_r.right = three_r

//第二棵树
// one.left = two_l
// one.right = two_r
// two_l.right = three_l
// two_r.right = three_r

let re = isSymmetric(one)
let re2 = isSymmetric2(one)
console.log(re)
console.log(re2)
