/**
 * 15. 3Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the sum
 * of zero. Notice that the solution set must not contain duplicate triplets.
 *
 * Example:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    const results = [];
    const sortedNums = nums.slice(0).sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || sortedNums[i - 1] !== sortedNums[i]) {
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
                if (sum === 0) {
                    results.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
                    while (l < r && sortedNums[l] === sortedNums[l + 1]) {
                        l++;
                    }
                    while (l < r && sortedNums[r] === sortedNums[r - 1]) {
                        r--;
                    }
                    l++;
                    r--;
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }
    }
    return results;
};

module.exports = { threeSum };
