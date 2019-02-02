/**
 * 4. Median of Two Sorted Arrays
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            nums.push(nums1[index1++]);
        } else {
            nums.push(nums2[index2++]);
        }
    }

    if (index1 < nums1.length) {
        nums = nums.concat(nums1.slice(index1));
    } else if (index2 < nums2.length) {
        nums = nums.concat(nums2.slice(index2));
    }

    const medianIndex = parseInt((nums.length - 1) / 2);
    if (nums.length % 2 === 1) {
        return nums[medianIndex];
    } else {
        return (nums[medianIndex] + nums[medianIndex + 1]) / 2;
    }
};

module.exports = { findMedianSortedArrays };