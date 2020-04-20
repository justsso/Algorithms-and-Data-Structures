//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {boolean}
 */
//思路：利用栈来匹配成对的括号，栈中压如左括号，遇到第一个右括号，看是否和栈顶的左括号匹配，直到最后栈为空，
//如果栈为空，那么就是匹配的，否则不匹配
var isValid = function (s) {
    let zhan = [], i = 0, set = new Set(['(', '{', '[']);
    let map = new Map()
    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')

    while (i < s.length) {
        if (set.has(s[i])) {
            zhan.push(s[i])
        } else {
            //右括号，就和栈顶的元素相比，看是否匹配
            let value = map.get(zhan[zhan.length - 1])
            if (value === s[i]) {
                zhan.pop()
            } else {
                return false
            }
        }
        i++
    }

    return zhan.length === 0
};
