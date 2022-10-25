// 和为 K 的子数组（PS：子数组是连续的
// 输入：nums = [1,2,3], k = 3 输出：2
// https://leetcode-cn.com/problems/subarray-sum-equals-k/
// 题解（前缀和&优化）：https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
function subarraySum(nums, k) {
    const map = { 0: 1 }
    let sum = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map[sum - k]) {
            count += map[sum - k]
        }
        map[sum] = map[sum] ? map[sum] + 1 : 1
    }
    return count
}

// 10.23
function subarraySum(nums, k) {
    let prefixSum = [nums[0]], i = 1
    while (i < nums.length) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
        i++
    }
    i = 0
    let count = 0
    while (i < nums.length) {
        if (prefixSum[i] == k) count++
        let j = 0
        while (j < i) {
            if (prefixSum[i] - prefixSum[j] == k) count++
            j++
        }
        i++
    }
    return count
}
// 优化：空间换时间
function subarraySum(nums, k) {
    let prefixSumMap = {}
    let prefixSum = 0, i = 0, count = 0
    while (i < nums.length) {
        prefixSum += nums[i]
        if (prefixSumMap[prefixSum-k]) count += prefixSumMap[prefixSum-k]
        if (prefixSumMap[prefixSum]) prefixSumMap[prefixSum]++
        else prefixSumMap[prefixSum] = 1
        i++
    }
    return count
}