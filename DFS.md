# DFS 深度优先算法

#### [559. N叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/)

给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 `3叉树` :

 

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)

 

我们应返回其最大深度，3。

**说明:**

1. 树的深度不会超过 `1000`。
2. 树的节点总不会超过 `5000`。



测试用例： 

```javascript
{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}
```

解法：

```javascript
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    function findAllDepth(root, max, arr) {

        if (root !== null) {
            if (root.val !== undefined) {
                max = max + 1;
                arr.push(max);
                if (root.children) {
                    for (let i = 0; i < root.children.length; i++) {
                        findAllDepth(root.children[i], max, arr)
                    }
                }
            }
            return arr;
        } else {
            return [0]
        }
    }

    return Math.max(...findAllDepth(root, 0, []))

};
```

