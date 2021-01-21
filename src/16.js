/**
 * 16. 3Sum Closest
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 * Input: nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
    let closest = null;
    let closestDist = null;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                const sumDist = Math.abs(sum - target);
                if (closestDist === null || sumDist < closestDist) {
                    closest = sum;
                    closestDist = sumDist;
                }
            }
        }
    }
    return closest;
};

module.exports = { threeSumClosest };
