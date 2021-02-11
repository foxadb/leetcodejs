/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be
 * if it were inserted in order.
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function (nums, target) {
    let i = 0;
    while (i < nums.length && nums[i] < target) {
        i++;
    }
    return i;
};

module.exports = { searchInsert };
