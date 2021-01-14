/**
 * 11. Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of the line i is at (i, ai) and (i, 0). Find two lines, which, together with
 * the x-axis forms a container, such that the container contains the most water
 *
 * Example:
 * Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array
 * [1, 8, 6, 2, 5, 4, 8, 3, 7]. In this case, the max area of water (blue
 * section) the container can contain is 49.
 */

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
    let maxFoundArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const currentArea = (j - i) * Math.min(height[i], height[j]);
            if (currentArea > maxFoundArea) {
                maxFoundArea = currentArea;
            }
        }
    }
    return maxFoundArea;
};

module.exports = { maxArea };
