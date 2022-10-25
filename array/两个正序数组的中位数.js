// 寻找两个正序数组的中位数：算法的时间复杂度应该为 O(log (m+n)) 。
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
// [1,2] [3,4]
function findMedianSortedArrays(nums1, nums2) {
    let mid = (nums1.length + nums2.length) / 2, left, right
    if (Math.floor(mid) === mid) {
        left = mid - 1, right = mid
    } else {
        left = right = Math.floor(mid)
    }
    let i = 0, leftNum, rightNum
    while (nums1.length || nums2.length) {
        let num
        if (nums2.length === 0) {
            num = nums1.shift()
        } else if (nums1.length === 0) {
            num = nums2.shift()
        } else if (nums1[0] < nums2[0]) {
            num = nums1.shift()
        } else {
            num = nums2.shift()
        }
        if (i === left) {
            leftNum = num
        }
        if (i === right) {
            rightNum = num
        }
        if (rightNum !== undefined) break
        i++
    }
    return (leftNum + rightNum) / 2
}

// findMedianSortedArrays([1,2], [3,4])
