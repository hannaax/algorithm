/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    let count = 0
    nums = nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[left] + nums[right] < target) {
            count += right - left
            left++
        }
        if (nums[left] + nums[right] >= target) right--
    }
    return count
};