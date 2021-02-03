/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appears only once and returns the new length.
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Example:
 * Input: nums = [1, 1, 2]
 * Output: 2, nums = [1, 2]
 * Explanation: Your function should return length = 2, with the first two
 * elements of nums being 1 and 2 respectively. It doesn't matter what you
 * leave beyond the returned length.
 */

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1;
};

module.exports = { removeDuplicates };
