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
    const sortedNums = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2 && closest !== target; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
            const sumDist = Math.abs(sum - target);
            if (closestDist === null || sumDist < closestDist) {
                closest = sum;
                closestDist = sumDist;
            }
            if (sum === target) {
                l = r;
            } else if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            }
        }
    }
    return closest;
};

module.exports = { threeSumClosest };
