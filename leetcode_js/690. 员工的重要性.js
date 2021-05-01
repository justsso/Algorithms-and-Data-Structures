/**
 * 给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度和 直系下属的 id 。

 比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

 现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。


 示例：

 输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
 输出：11
 解释：
 员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。

 提示：

 一个员工最多有一个 直系 领导，但是可以有多个 直系 下属
 员工数量不超过 2000 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/employee-importance
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 关键词：递归、深度优先遍历
 * 思路: 1. 用空间换时间。
 * 先遍历所有的输入数据，然后建立以员工id为key，重要度和直系下属为value的哈希结构，然后，要求员工id和他所有下属的重要度之和，就从哈希结构中依次取出，重要程度相加就行。然后如果他的下属还有下属，就递归相加
 * 时间复杂度：O(n)  空间复杂度O(n)
 * 但是有时候可能不需要处理所有的数据，所以对所有数据进行哈希是一种浪费
 *
 */

/**
 * Definition for Employee.
 */
function Employee(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
}

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    // employees 是上面的 Employee类型实例LÒ
    // let m = new Map()
    // for (let i = 0; i < employees.length; i++) {
    //     m.set(employees[i].id, employees[i])
    // }
    // 使用reduce ，将数组转为对象。用对象做哈希，比较节省内存
    const obj = employees.reduce((obj, employee, index) => {
        obj[employee.id] = employee
        return obj
    }, {})

    function getSumImportance(id) {
        let employee = obj[id];
        let result = employee.importance;
        for (const id of employee.subordinates) {
            result += getSumImportance(id)
        }
        return result;
    }

    return getSumImportance(id)
};
let test1 = [
    {id: 1, importance: 2, subordinates: [2]},
    {id: 2, importance: 3, subordinates: []}
]
let test2 = [
    {id: 1, importance: 5, subordinates: [2, 3]},
    {id: 2, importance: 3, subordinates: []},
    {id: 3, importance: 3, subordinates: []}
]
console.log(GetImportance(test1, 2))
console.log(GetImportance(test2, 1))

/**
 * 思路： 2. 直接for循环遍历，并递归求所有下属的重要程度之和
 */

var GetImportance2 = function (employees, id) {
    let result = 0;
    let subordinates = []

    // 本质上是深度优先遍历
    function dfs(id) {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                result += employees[i].importance
                subordinates = employees[i].subordinates
                break;
            }
        }
        subordinates.forEach(id => dfs(id))
    }

    dfs(id)
    return result
}
