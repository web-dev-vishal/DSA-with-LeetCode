// 189 question on leetcode  
var rotate = function(nums, k) {

    const n = nums.length;

    // Handle k larger than array length (full rotations cancel out)
    k = k % n;

    // Helper: reverse elements from index l to r (in-place)
    function reverse(l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]; // swap
            l++;
            r--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);

    // Step 2: Reverse first k elements (they're in wrong order)
    reverse(0, k - 1);

    // Step 3: Reverse the remaining elements (they're in wrong order)
    reverse(k, n - 1);
};

