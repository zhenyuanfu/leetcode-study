// 416. 分割等和子集
// https://leetcode.cn/problems/partition-equal-subset-sum/
// https://leetcode.cn/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/
// https://leetcode.cn/problems/NUPfPr/solution/by-wo-yao-chu-qu-luan-shuo-4jll/
// nums为正整数数组
function canPartition(nums) {
    if (nums.length < 2) return false
    const sum = nums.reduce((acc, val) => acc + val)
    if (sum % 2 == 1) return false // 奇数
    const dp = []
    dp.push(new Array(sum/2+1).fill(false))
    dp[0][0] = true
    for (let i = 1; i <= nums.length; i++) {
        dp[i] = []
        dp[i][0] = true
        for (let j = 1; j <= sum / 2; j++) {
            dp[i][j] = dp[i-1][j] // 不选
            if (!dp[i][j] && nums[i-1] <= j) {
                dp[i][j] = dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[nums.length][sum/2]
}

function canPartition(nums) {
    if (nums.length < 2) return false
    const sum = nums.reduce((acc, val) => acc + val)
    if (sum % 2 == 1) return false // 奇数
    const dp = [] // 状态定义：dp[i][j]表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j
    // 填第一行，初始化为FALSE
    dp.push(new Array(sum/2+1).fill(false))
    if (nums[0] <= sum/2) {
        dp[0][nums[0]] = true // 其中和为第一个数的那一项刚好满足，赋值为TRUE
    }
    for (let i = 1; i < nums.length; i++) {
        dp[i] = []
        for (let j = 0; j <= sum / 2; j++) {
            dp[i][j] = dp[i-1][j] // 不选
            if (dp[i][j]) continue
            if (nums[i] == j) {
                dp[i][j] = true; continue
            }
            if (nums[i] < j) {
                dp[i][j] = dp[i-1][j-nums[i]]
            }
        }
    }
    return dp[nums.length-1][sum/2]
}

// 空间优化：一维dp优化，相当于求当前行dp时用当前dp作为上一行的数据，求出结果后直接覆盖dp原位置，即原地修改dp，所以要注意从后往前填充dp，否则覆盖的值会影响后续求值
function canPartition(nums) {
    if (nums.length < 2) return false
    const sum = nums.reduce((acc, val) => acc + val)
    if (sum % 2 == 1) return false // 奇数
    const dp = new Array(sum/2+1).fill(false)
    if (nums[0] <= sum/2) {
        dp[nums[0]] = true // 其中和为第一个数的那一项刚好满足，赋值为TRUE
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = sum / 2; j >= 0 ; j--) {
            if (dp[j]) continue
            if (nums[i] == j) {
                dp[j] = true; continue
            }
            if (nums[i] < j) {
                dp[j] = dp[j-nums[i]]
            }
        }
    }
    return dp[sum/2]
}

// 10.23
function canPartition(nums) {
    if (nums.length < 2) return false
    let sum = nums.reduce((acc, num) => acc + num)
    if (sum % 2 == 1) return false // sum为奇数
    let dp = [], target = sum / 2
    dp[0] = new Array(target + 1).fill(false)
    dp[0][0] = true
    for (let i = 1; i <= nums.length; i++) {
        dp[i] = []
        dp[i][0] = true
        for (let j = 1; j <= target; j++) {
            dp[i][j] = dp[i-1][j]
            if (!dp[i][j] && nums[i-1] <= j) {
                dp[i][j] = dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[nums.length][target]
}
// 空间优化：注意从后遍历填充dp
function canPartition(nums) {
    if (nums.length < 2) return false
    let sum = nums.reduce((acc, num) => acc + num)
    if (sum % 2 == 1) return false // sum为奇数
    let target = sum / 2
    let dp = new Array(target + 1).fill(false)
    for (let i = 1; i <= nums.length; i++) {
        dp[0] = true
        for (let j = target; j >= 1; j--) {
            if (!dp[j] && nums[i-1] <= j) {
                dp[j] = dp[j-nums[i-1]]
            }
        }
    }
    return dp[target]
}