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
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const n = nums1.length + nums2.length;
    let start = 0, end = nums1.length;

    while (start <= end) {
        // Partition first array
        const i = parseInt((start + end) / 2);
        const maxLeft1 = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
        const minRight1 = i === nums1.length ? Number.MAX_SAFE_INTEGER : nums1[i];
        
        // Partition second array
        const j = parseInt((n + 1) / 2) - i;
        const maxLeft2 = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
        const minRight2 = j === nums2.length ? Number.MAX_SAFE_INTEGER : nums2[j];

        // Compare elements at the partitions centers
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (n % 2) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
        } else if (maxLeft1 > minRight2) {
            end = i - 1;
        } else {
            start = i + 1;
        }
    }
};

module.exports = { findMedianSortedArrays };