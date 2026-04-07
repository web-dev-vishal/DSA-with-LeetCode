// 162 question on leetcode 
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare mid with next element
        if (nums[mid] < nums[mid + 1]) {
            // Peak is on the right
            left = mid + 1;
        } else {
            // Peak is on the left (including mid)
            right = mid;
        }
    }

    // left === right → peak index
    return left;
};