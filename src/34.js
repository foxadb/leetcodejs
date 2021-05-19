/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 8
 * Output: [3, 4]
 *
 * Example 2:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 6
 * Output: [-1, -1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1, -1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = -1, right = -1;
    let i = 0, j = nums.length - 1;
    while (i < j) {
        const k = Math.floor((i + j) / 2);
        if (nums[k] < target) {
            i = k + 1;
        } else {
            j = k;
        }
    }
    if (nums[i] !== target) {
        return [left, right];
    }
    left = i;
    j = nums.length - 1;
    while (i < j) {
        const k = Math.floor((i + j) / 2) + 1;
        if (nums[k] > target) {
            j = k - 1;
        } else {
            i = k;
        }
    }
    right = j;
    return [left, right];
};

module.exports = { searchRange };
