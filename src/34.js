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
var searchRange = function(nums, target) {
    let left = -1;
    let right = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === target) {
            if (left === -1) {
                left = i;
            }
            if (right === -1 || right < i) {
                right = i;
            }
        }
    }
    return [left, right];
};

module.exports = { searchRange };
