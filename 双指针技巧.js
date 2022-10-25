/**
 * 1. 一般用来求连续xxx，连续子串问题，如https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 2. 先假设初始双指针是最优解，初始双指针可以是[0,0]，也可以是[0,length-1]，看情况
 * 3. 然后以找到更优解为目的，不断推进指针直到结束或指针相遇
 */