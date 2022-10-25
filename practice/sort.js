// 冒泡排序
// 选择排序
// 插入排序
// 归并排序
// 快速排序

let nums = [2,5,7,4,9,8,1,3,5,6,9,7];

// function bubbleSort(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - i; j++) {
//             if (nums[j] > nums[j+1]) {
//                 let temp = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = temp;
//             }
//         }
//     }
//     console.log(nums);
// }
// bubbleSort(nums)

// function selectSort(nums) {
//     let minIndex;
//     for (let i = 0; i < nums.length - 1; i++) {
//         minIndex = i;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             let temp = nums[i];
//             nums[i] = nums[minIndex]
//             nums[minIndex] = temp
//         }
//     }
//     console.log(nums);
// }
// selectSort(nums)

// function insertSort(nums) {
//     for(let i = 1; i < nums.length; i++) {
//         let temp = nums[i];
//         let preIndex = i - 1;
//         while(preIndex >= 0 &&  temp < nums[preIndex]) {
//             nums[preIndex+1] = nums[preIndex];
//             preIndex = preIndex - 1;
//         }
//         nums[preIndex + 1] = temp;
//     }
//     console.log(nums);
// }
// insertSort(nums)

// 快速排序
function quickSort(nums, left, right) {
    if (left < right) {
        let partitionIndex  = partition(nums, left, right);
        quickSort(nums, left, partitionIndex  - 1);
        quickSort(nums, partitionIndex  + 1, right);
    }
    return nums;
}
function partition(nums, left, right) {
    let pivot = nums[left];
    let index = left + 1;
    for (let i = index; i <= right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, index);
            index++;
        }
    }
    swap(nums, left, index-1);
    return index - 1;
}
function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// console.log(quickSort(nums, 0, nums.length-1));

// 归并排序
function mergeSort(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor((nums.length-1)/2)
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}
function merge() {}

// var sortNums = [1,3,5,7,9,11,13]
// // 二分查找
// function binarySearch(nums, low, high, target) {
//     if (low > high) return -1;
//     let mid = Math.floor((low+high)/2)
//     if (nums[mid] === target) return mid;
//     if (nums[mid] < target) return binarySearch(nums, mid+1, high, target);
//     return binarySearch(nums, low, mid-1, target);
// }
// console.log(binarySearch(sortNums, 0, sortNums.length - 1, 9));

