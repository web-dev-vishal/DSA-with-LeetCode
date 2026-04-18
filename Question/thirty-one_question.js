// 704 question on leetcode
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        // Pick the middle index
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // ✅ found the target
        }

        if (nums[mid] < target) {
            left = mid + 1;  // target is in the RIGHT half
        } else {
            right = mid - 1; // target is in the LEFT half
        }
    }

    return -1; // ❌ target not found
};